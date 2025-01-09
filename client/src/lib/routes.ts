// Marketing routes that use the marketing layout
export const marketingRoutes = [
  "/",
  "/features",
  "/pricing",
  "/updates",
  "/features/growth-sprints",
  "/features/progress-tracking",
  "/features/framework",
  "/features/library",
  "/features/achievements",
  "/features/saas-metrics",
] as const;

export function isMarketingRoute(path: string): boolean {
  return marketingRoutes.includes(path) || path.startsWith('/features/');
}