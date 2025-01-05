import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { type Express } from "express";
import session from "express-session";
import createMemoryStore from "memorystore";
import { users, type SelectUser } from "@db/schema";
import { db } from "@db";
import { eq } from "drizzle-orm";
import { google } from "googleapis";

// Extend express user object with our schema
declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

function createSheetsAPI(accessToken: string) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });
  return google.sheets({ version: 'v4', auth });
}

async function setupUserSpreadsheet(sheets: any, userId: number) {
  try {
    // Create a new spreadsheet
    const spreadsheet = await sheets.spreadsheets.create({
      requestBody: {
        properties: {
          title: `Growthlog Data - User ${userId}`,
        },
        sheets: [
          {
            properties: {
              title: 'Tasks',
              gridProperties: {
                rowCount: 1000,
                columnCount: 10,
              },
            },
          },
          {
            properties: {
              title: 'Achievements',
              gridProperties: {
                rowCount: 100,
                columnCount: 5,
              },
            },
          },
        ],
      },
    });

    const spreadsheetId = spreadsheet.data.spreadsheetId;

    // Update initial headers
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Tasks!A1:E1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [['Title', 'Description', 'Status', 'Points', 'Completed At']],
      },
    });

    return spreadsheetId;
  } catch (error) {
    console.error('Error setting up spreadsheet:', error);
    throw error;
  }
}

export function setupAuth(app: Express) {
  const MemoryStore = createMemoryStore(session);
  const sessionSettings: session.SessionOptions = {
    secret: process.env.REPL_ID || "growthlog-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {},
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
  };

  if (app.get("env") === "production") {
    app.set("trust proxy", 1);
    sessionSettings.cookie = {
      secure: true,
    };
  }

  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "/api/auth/google/callback",
        scope: [
          'profile',
          'email',
          'https://www.googleapis.com/auth/spreadsheets',
        ],
        accessType: 'offline',
        prompt: 'consent',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let [user] = await db
            .select()
            .from(users)
            .where(eq(users.googleId, profile.id))
            .limit(1);

          if (!user) {
            // Create new user
            const [newUser] = await db
              .insert(users)
              .values({
                googleId: profile.id,
                email: profile.emails?.[0]?.value,
                displayName: profile.displayName,
                profilePicture: profile.photos?.[0]?.value,
                googleAccessToken: accessToken,
                googleRefreshToken: refreshToken,
              })
              .returning();

            user = newUser;

            // Set up Google Sheets
            const sheets = createSheetsAPI(accessToken);
            const spreadsheetId = await setupUserSpreadsheet(sheets, user.id);

            // Update user with spreadsheet ID
            await db
              .update(users)
              .set({ sheetsSpreadsheetId: spreadsheetId })
              .where(eq(users.id, user.id));

            user.sheetsSpreadsheetId = spreadsheetId;
          } else {
            // Update existing user's tokens
            await db
              .update(users)
              .set({
                googleAccessToken: accessToken,
                googleRefreshToken: refreshToken,
              })
              .where(eq(users.id, user.id));
          }

          return done(null, user);
        } catch (err) {
          return done(err as Error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.id, id))
        .limit(1);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // Auth endpoints
  app.get("/api/auth/google", passport.authenticate("google"));

  app.get(
    "/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      res.redirect("/dashboard");
    }
  );

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).send("Logout failed");
      }
      res.json({ message: "Logout successful" });
    });
  });

  app.get("/api/auth/user", (req, res) => {
    if (req.isAuthenticated()) {
      return res.json(req.user);
    }
    res.status(401).send("Not logged in");
  });
}
