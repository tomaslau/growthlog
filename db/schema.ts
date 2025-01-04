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

export const taskCategories = pgTable("task_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  basePoints: integer("base_points").notNull(),
  icon: text("icon").notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

export const growthTasks = pgTable("growth_tasks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  categoryId: integer("category_id").references(() => taskCategories.id).notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  pointsEarned: integer("points_earned").notNull(),
  completed: boolean("completed").default(false).notNull(),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

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

// Schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const insertTaskSchema = createInsertSchema(growthTasks);
export const selectTaskSchema = createSelectSchema(growthTasks);
export const insertAchievementSchema = createInsertSchema(achievements);
export const selectAchievementSchema = createSelectSchema(achievements);

// Types
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type InsertTask = typeof growthTasks.$inferInsert;
export type SelectTask = typeof growthTasks.$inferSelect;
export type InsertAchievement = typeof achievements.$inferInsert;
export type SelectAchievement = typeof achievements.$inferSelect;