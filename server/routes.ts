import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
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
