import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, TrendingUp, Calendar } from "lucide-react";

// Mock insights data - will be replaced with API data later
const insights = [
  {
    type: "strength",
    title: "Content Creation Specialist",
    description: "You excel at content tasks. Consider taking on more content projects.",
    icon: Target,
    category: "Strength"
  },
  {
    type: "opportunity",
    title: "Analytics Growth Potential",
    description: "Try more analytics tasks to diversify your growth skills.",
    icon: TrendingUp,
    category: "Opportunity"
  },
  {
    type: "pattern",
    title: "Most Productive Time",
    description: "Your highest impact tasks are completed in the morning.",
    icon: Calendar,
    category: "Pattern"
  }
];

export default function GrowthInsights() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          <CardTitle>Personalized Growth Insights</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {insights.map((insight, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">
                <insight.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{insight.title}</h3>
                  <Badge variant={
                    insight.type === "strength" ? "success" :
                    insight.type === "opportunity" ? "warning" : "secondary"
                  }>
                    {insight.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
