import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star } from "lucide-react";

const activities = [
  { 
    id: 1, 
    description: "completed cold email outreach to 10 potential partners",
    points: 150,
    category: "Outreach",
    time: "about 18 hours ago"
  },
  { 
    id: 2,
    description: "created 3 social media posts for product launch",
    points: 100,
    category: "Content Creation",
    time: "about 23 hours ago"
  },
  {
    id: 3,
    description: "analyzed competitor pricing strategies",
    points: 80,
    category: "Analytics",
    time: "2 days ago"
  }
];

export default function GrowthLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Growth Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map(activity => (
            <div key={activity.id} className="flex gap-4">
              <div className="mt-1">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    <span className="font-medium">You</span> {activity.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">+{activity.points}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    {activity.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}