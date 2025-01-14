import { pgTable, text, serial, integer, boolean, timestamp, foreignKey, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  googleId: text("google_id").unique(),
  email: text("email").unique(),
  displayName: text("display_name"),
  profilePicture: text("profile_picture"),
  googleAccessToken: text("google_access_token"),
  googleRefreshToken: text("google_refresh_token"),
  sheetsSpreadsheetId: text("sheets_spreadsheet_id"),
  totalPoints: integer("total_points").default(0).notNull(),
  currentStreak: integer("current_streak").default(0).notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
});

// Shared dashboards for public access
export const sharedDashboards = pgTable("shared_dashboards", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  shareToken: text("share_token").unique().notNull(),
  isPublic: boolean("is_public").default(false).notNull(),
  customizeableLayout: boolean("customizeable_layout").default(false).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`NOW()`).notNull(),
});

// Dashboard components configuration
export const dashboardComponents = pgTable("dashboard_components", {
  id: serial("id").primaryKey(),
  dashboardId: integer("dashboard_id").references(() => sharedDashboards.id).notNull(),
  componentType: text("component_type").notNull(), // "tasks", "achievements", "growth_log", etc.
  position: integer("position").notNull(),
  settings: text("settings").notNull(), // JSON string of component-specific settings
  visible: boolean("visible").default(true).notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`NOW()`).notNull(),
});

// Enhanced growth ideas table with additional fields
export const growthIdeas = pgTable("growth_ideas", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // e.g., "SaaS", "eCommerce", "B2B"
  subCategory: text("sub_category").notNull(), // e.g., "Acquisition", "Activation", "Retention"
  strategyType: text("strategy_type").notNull(), // e.g., "Organic", "Paid", "Email"
  platform: text("platform"), // e.g., "Instagram", "LinkedIn", "TikTok"
  difficulty: text("difficulty").notNull(),
  impact: text("impact").notNull(),
  status: text("status").default('draft').notNull(), // "draft", "published", "archived"
  tags: text("tags").array(), // Array of tags for filtering
  sourceUrl: text("source_url"), // Reference URL
  icon: text("icon").notNull(),
  sheetsLastSync: timestamp("sheets_last_sync"), // Track last sync with Google Sheets
  sheetsRowId: integer("sheets_row_id"), // Row ID in Google Sheets for sync
  userId: integer("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
  updatedAt: timestamp("updated_at").default(sql`NOW()`).notNull(),
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

// New table for mood tracking
export const moodEntries = pgTable("mood_entries", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  taskId: integer("task_id").references(() => tasks.id).notNull(),
  mood: text("mood").notNull(), // "energized", "focused", "tired", "distracted"
  productivity: integer("productivity").notNull(), // 1-5 scale
  notes: text("notes"),
  createdAt: timestamp("created_at").default(sql`NOW()`).notNull(),
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
export const insertSharedDashboardSchema = createInsertSchema(sharedDashboards);
export const selectSharedDashboardSchema = createSelectSchema(sharedDashboards);
export const insertDashboardComponentSchema = createInsertSchema(dashboardComponents);
export const selectDashboardComponentSchema = createSelectSchema(dashboardComponents);
export const insertMoodEntrySchema = createInsertSchema(moodEntries);
export const selectMoodEntrySchema = createSelectSchema(moodEntries);

// TypeScript types
export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
export type InsertGrowthIdea = typeof growthIdeas.$inferInsert;
export type SelectGrowthIdea = typeof growthIdeas.$inferSelect;
export type InsertTask = typeof tasks.$inferInsert;
export type SelectTask = typeof tasks.$inferSelect;
export type InsertAchievement = typeof achievements.$inferInsert;
export type SelectAchievement = typeof achievements.$inferSelect;
export type InsertSharedDashboard = typeof sharedDashboards.$inferInsert;
export type SelectSharedDashboard = typeof sharedDashboards.$inferSelect;
export type InsertDashboardComponent = typeof dashboardComponents.$inferInsert;
export type SelectDashboardComponent = typeof dashboardComponents.$inferSelect;
export type InsertMoodEntry = typeof moodEntries.$inferInsert;
export type SelectMoodEntry = typeof moodEntries.$inferSelect;