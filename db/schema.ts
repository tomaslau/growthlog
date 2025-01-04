import { pgTable, text, serial, integer, boolean, timestamp, foreignKey } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
  totalPoints: integer("total_points").default(0).notNull(),
  currentStreak: integer("current_streak").default(0).notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

// Simplified growth ideas focused on SaaS
export const growthIdeas = pgTable("growth_ideas", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // e.g., "Acquisition", "Activation", "Retention"
  difficulty: text("difficulty").notNull(),
  impact: text("impact").notNull(),
  icon: text("icon").notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

// Pomodoro-sized tasks
export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  growthIdeaId: integer("growth_idea_id").references(() => growthIdeas.id).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  status: text("status").notNull(), // "today", "later", "completed"
  points: integer("points").default(1).notNull(), // Simplified to 1 point per task
  completed: boolean("completed").default(false).notNull(),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`NOW()`).notNull(),
});

// Achievements system
export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  requiredPoints: integer("required_points").notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

export const userAchievements = pgTable("user_achievements", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  achievementId: integer("achievement_id").references(() => achievements.id).notNull(),
  unlockedAt: timestamp("unlocked_at").default(sql`NOW()`).notNull(),
});

// Schema definitions for Zod validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const insertGrowthIdeaSchema = createInsertSchema(growthIdeas);
export const selectGrowthIdeaSchema = createSelectSchema(growthIdeas);
export const insertTaskSchema = createInsertSchema(tasks);
export const selectTaskSchema = createSelectSchema(tasks);
export const insertAchievementSchema = createInsertSchema(achievements);
export const selectAchievementSchema = createSelectSchema(achievements);

// TypeScript types
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type InsertGrowthIdea = typeof growthIdeas.$inferInsert;
export type SelectGrowthIdea = typeof growthIdeas.$inferSelect;
export type InsertTask = typeof tasks.$inferInsert;
export type SelectTask = typeof tasks.$inferSelect;
export type InsertAchievement = typeof achievements.$inferInsert;
export type SelectAchievement = typeof achievements.$inferSelect;

// Example JSON structure for Google Sheets import/export
/*
{
  "growthIdea": {
    "title": "Cold Email Campaign",
    "description": "Launch targeted cold email campaign for SaaS decision makers",
    "category": "Acquisition",
    "difficulty": "Medium",
    "impact": "High",
    "icon": "📧",
    "tasks": [
      {
        "title": "Research and create ICP list",
        "description": "Define ideal customer profile and create initial list",
        "status": "today"
      },
      {
        "title": "Draft email template",
        "description": "Write and test initial email template",
        "status": "today"
      }
    ]
  }
}
*/