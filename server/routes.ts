import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { achievements, userAchievements, users, sharedDashboards, dashboardComponents, tasks } from "@db/schema";
import { eq, and } from "drizzle-orm";
import crypto from "crypto";
import { google } from "googleapis";
import { setupAuth } from "./auth";

// Helper to create Sheets API client for a user
function createSheetsAPI(accessToken: string) {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });
  return google.sheets({ version: 'v4', auth });
}

export function registerRoutes(app: Express): Server {
  // Set up auth routes
  setupAuth(app);

  // Get completed tasks (now fetches from Google Sheets)
  app.get('/api/tasks/completed', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    try {
      const user = req.user as Express.User;
      const sheets = createSheetsAPI(user.googleAccessToken!);

      // Fetch tasks from Google Sheets
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: user.sheetsSpreadsheetId,
        range: 'Tasks!A2:E',
      });

      const values = response.data.values || [];
      const completedTasks = values
        .filter(row => row[2] === 'completed')
        .map((row, index) => ({
          id: index + 1,
          title: row[0],
          description: row[1],
          status: row[2],
          points: parseInt(row[3]),
          completedAt: row[4],
          userId: user.id,
        }));

      res.json({ tasks: completedTasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      res.status(500).json({ message: "Error fetching completed tasks" });
    }
  });

  // Create new task (saves to Google Sheets)
  app.post('/api/tasks', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    try {
      const user = req.user as Express.User;
      const { title, description, status = 'today', points = 1 } = req.body;

      const sheets = createSheetsAPI(user.googleAccessToken!);

      // Append task to Google Sheets
      await sheets.spreadsheets.values.append({
        spreadsheetId: user.sheetsSpreadsheetId,
        range: 'Tasks!A2:E2',
        valueInputOption: 'RAW',
        requestBody: {
          values: [[title, description, status, points, '']],
        },
      });

      res.json({ message: "Task created successfully" });
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ message: "Error creating task" });
    }
  });

  // Update task status (updates Google Sheets)
  app.put('/api/tasks/:taskId', async (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    try {
      const user = req.user as Express.User;
      const { status, completedAt } = req.body;
      const taskId = parseInt(req.params.taskId);

      const sheets = createSheetsAPI(user.googleAccessToken!);

      // Update task in Google Sheets
      // Note: taskId + 2 because row 1 is header and taskId starts from 0
      await sheets.spreadsheets.values.update({
        spreadsheetId: user.sheetsSpreadsheetId,
        range: `Tasks!C${taskId + 2}:E${taskId + 2}`,
        valueInputOption: 'RAW',
        requestBody: {
          values: [[status, completedAt || '']],
        },
      });

      res.json({ message: "Task updated successfully" });
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ message: "Error updating task" });
    }
  });

  // Create a new shared dashboard
  app.post('/api/dashboards/share', async (req, res) => {
    try {
      const { userId, title, description, isPublic, customizeableLayout } = req.body;

      // Generate a unique share token
      const shareToken = crypto.randomBytes(16).toString('hex');

      const dashboard = await db.insert(sharedDashboards).values({
        userId,
        shareToken,
        title,
        description,
        isPublic,
        customizeableLayout
      }).returning();

      // Create default components
      const defaultComponents = [
        { componentType: "growth_log", position: 0 },
        { componentType: "achievements", position: 1 },
        { componentType: "tasks", position: 2 }
      ];

      for (const component of defaultComponents) {
        await db.insert(dashboardComponents).values({
          dashboardId: dashboard[0].id,
          ...component,
          settings: "{}"
        });
      }

      res.json({ dashboard: dashboard[0] });
    } catch (error) {
      res.status(500).json({ message: "Error creating shared dashboard" });
    }
  });

  // Update dashboard sharing settings
  app.put('/api/dashboards/:id/settings', async (req, res) => {
    try {
      const { id } = req.params;
      const { isPublic, customizeableLayout, title, description } = req.body;

      const dashboard = await db
        .update(sharedDashboards)
        .set({ 
          isPublic, 
          customizeableLayout, 
          title, 
          description,
          updatedAt: new Date()
        })
        .where(eq(sharedDashboards.id, parseInt(id)))
        .returning();

      res.json({ dashboard: dashboard[0] });
    } catch (error) {
      res.status(500).json({ message: "Error updating dashboard settings" });
    }
  });

  // Get a shared dashboard by token
  app.get('/api/dashboards/shared/:token', async (req, res) => {
    try {
      const { token } = req.params;

      const dashboard = await db.query.sharedDashboards.findFirst({
        where: eq(sharedDashboards.shareToken, token),
        with: {
          components: true
        }
      });

      if (!dashboard) {
        return res.status(404).json({ message: "Dashboard not found" });
      }

      if (!dashboard.isPublic) {
        return res.status(403).json({ message: "This dashboard is private" });
      }

      res.json({ dashboard });
    } catch (error) {
      res.status(500).json({ message: "Error fetching shared dashboard" });
    }
  });

  // Update dashboard components
  app.put('/api/dashboards/:id/components', async (req, res) => {
    try {
      const { id } = req.params;
      const { components } = req.body;

      // Update each component
      for (const component of components) {
        await db
          .update(dashboardComponents)
          .set({ 
            position: component.position,
            visible: component.visible,
            settings: component.settings,
            updatedAt: new Date()
          })
          .where(eq(dashboardComponents.id, component.id));
      }

      const updatedComponents = await db.query.dashboardComponents.findMany({
        where: eq(dashboardComponents.dashboardId, parseInt(id))
      });

      res.json({ components: updatedComponents });
    } catch (error) {
      res.status(500).json({ message: "Error updating dashboard components" });
    }
  });

  // Get all available achievements
  app.get('/api/achievements', async (req, res) => {
    try {
      const allAchievements = await db.query.achievements.findMany({
        orderBy: (achievements, { asc }) => [asc(achievements.requiredPoints)]
      });
      res.json({ achievements: allAchievements });
    } catch (error) {
      res.status(500).json({ message: "Error fetching achievements" });
    }
  });

  // Get user's achievements
  app.get('/api/achievements/user/:id', async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      const userAchievs = await db.query.userAchievements.findMany({
        where: eq(userAchievements.userId, userId),
        with: {
          achievement: true
        }
      });
      res.json({ achievements: userAchievs });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user achievements" });
    }
  });

  // Award achievement to user
  app.post('/api/achievements/award', async (req, res) => {
    try {
      const { userId, achievementId } = req.body;

      // Check if user already has this achievement
      const existing = await db.query.userAchievements.findFirst({
        where: (ua) => 
          eq(ua.userId, userId) && eq(ua.achievementId, achievementId)
      });

      if (existing) {
        return res.status(400).json({ message: "Achievement already awarded" });
      }

      // Award the achievement
      await db.insert(userAchievements).values({
        userId,
        achievementId,
        unlockedAt: new Date()
      });

      const achievement = await db.query.achievements.findFirst({
        where: eq(achievements.id, achievementId)
      });

      res.json({ 
        message: "Achievement awarded",
        achievement 
      });
    } catch (error) {
      res.status(500).json({ message: "Error awarding achievement" });
    }
  });

  // Mock API endpoints for the static prototype
  app.get('/api/activities', (req, res) => {
    res.json({
      activities: [
        { id: 1, type: 'deep_work', duration: 118, timestamp: Date.now() - 18 * 3600000 },
        { id: 2, type: 'deep_work', duration: 209, timestamp: Date.now() - 23 * 3600000 },
        { id: 3, type: 'deep_work', duration: 120, timestamp: Date.now() - 48 * 3600000 }
      ]
    });
  });

  app.get('/api/ideas', (req, res) => {
    res.json({
      ideas: [
        {
          id: 1,
          title: "Cloneable Templates",
          description: "Improve acquisition & activation with a template library",
          icon: "📑"
        },
        {
          id: 2,
          title: "Co-Marketing Campaigns", 
          description: "Partner with complementary businesses to increase reach",
          icon: "🤝"
        },
        {
          id: 3,
          title: "Cold Calling 2.0",
          description: "Prospect new accounts without Cold Calling",
          icon: "📞"
        }
      ]
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}