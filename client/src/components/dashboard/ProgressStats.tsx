import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function ProgressStats() {
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
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">{label}</h3>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2">
              {value}
              {trend === "up" && (
                <TrendingUp className="h-5 w-5 text-green-500" />
              )}
              {trend === "down" && (
                <TrendingDown className="h-5 w-5 text-red-500" />
              )}
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}