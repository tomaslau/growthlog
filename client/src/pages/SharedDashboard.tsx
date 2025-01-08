import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { GrowthLog } from "@/components/dashboard/GrowthLog";
import AchievementGrid from "@/components/achievements/AchievementGrid";
import TaskBoard from "@/components/tasks/TaskBoard";
import { Lock } from "lucide-react";

export default function SharedDashboard() {
  const { token } = useParams();

  const { data, isError } = useQuery({
    queryKey: [`/api/dashboards/shared/${token}`],
  });

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <Lock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Private Dashboard</h1>
            <p className="text-muted-foreground">
              This dashboard is currently private or doesn't exist.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const dashboard = data?.dashboard;
  if (!dashboard) return null;

  const sortedComponents = dashboard.components
    .filter((c: any) => c.visible)
    .sort((a: any, b: any) => a.position - b.position);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">{dashboard.title}</h1>
        {dashboard.description && (
          <p className="text-muted-foreground">{dashboard.description}</p>
        )}
      </div>

      <div className="space-y-6">
        {sortedComponents.map((component: any) => {
          switch (component.componentType) {
            case "growth_log":
              return <GrowthLog key={component.id} />;
            case "achievements":
              return <AchievementGrid key={component.id} userId={dashboard.userId} />;
            case "tasks":
              return <TaskBoard key={component.id} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}