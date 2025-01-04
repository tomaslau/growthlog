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

export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(), 
  requiredTasks: integer("required_tasks").notNull(),
  bonusPoints: integer("bonus_points").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  categoryId: integer("category_id").references(() => taskCategories.id),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

export const userChallenges = pgTable("user_challenges", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  challengeId: integer("challenge_id").references(() => challenges.id).notNull(),
  progress: integer("progress").default(0).notNull(),
  completed: boolean("completed").default(false).notNull(),
  completedAt: timestamp("completed_at"),
  joinedAt: timestamp("joined_at").default(sql`NOW()`).notNull(),
});

export const taskStatuses = pgTable("task_statuses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  order: integer("order").notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

export const tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  statusId: integer("status_id").references(() => taskStatuses.id).notNull(),
  dueDate: timestamp("due_date"),
  points: integer("points").default(0).notNull(),
  sourceIdeaId: integer("source_idea_id").references(() => growthTasks.id),
  completed: boolean("completed").default(false).notNull(),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`NOW()`).notNull(),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const insertTaskSchema = createInsertSchema(tasks);
export const selectTaskSchema = createSelectSchema(tasks);
export const insertAchievementSchema = createInsertSchema(achievements);
export const selectAchievementSchema = createSelectSchema(achievements);
export const insertChallengeSchema = createInsertSchema(challenges);
export const selectChallengeSchema = createSelectSchema(challenges);
export const insertTaskStatusSchema = createInsertSchema(taskStatuses);
export const selectTaskStatusSchema = createSelectSchema(taskStatuses);


export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type InsertTask = typeof tasks.$inferInsert;
export type SelectTask = typeof tasks.$inferSelect;
export type InsertAchievement = typeof achievements.$inferInsert;
export type SelectAchievement = typeof achievements.$inferSelect;
export type InsertChallenge = typeof challenges.$inferInsert;
export type SelectChallenge = typeof challenges.$inferSelect;
export type InsertTaskStatus = typeof taskStatuses.$inferInsert;
export type SelectTaskStatus = typeof taskStatuses.$inferSelect;