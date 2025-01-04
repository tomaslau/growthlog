import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { achievements, userAchievements, users } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
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