import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

export function ProgressStats() {
  const stats = [
    { 
      label: "Growth Tasks This Month", 
      value: "10 tasks", 
      progress: 33 
    },
    { 
      label: "Growth Momentum", 
      value: "Rising ↗", 
      progress: 75,
      trend: "up"
    },
    { 
      label: "Active Days", 
      value: "12/30 days", 
      progress: 40 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map(({ label, value, progress, trend }) => (
        <Card key={label}>
          <CardContent className="pt-4 pb-3">
            <h3 className="text-sm font-medium text-muted-foreground mb-1">{label}</h3>
            <div className="text-lg font-semibold mb-3 flex items-center gap-2">
              {value}
              {trend === "up" && (
                <TrendingUp className="h-4 w-4 text-green-500" />
              )}
              {trend === "down" && (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
            </div>
            <Progress value={progress} className="h-1.5" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}