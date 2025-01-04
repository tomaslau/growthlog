import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const activities = [
  { 
    id: 1, 
    description: "completed cold email outreach to 10 potential partners.",
    time: "about 18 hours ago"
  },
  { 
    id: 2,
    description: "created 3 social media posts for product launch.",
    time: "about 23 hours ago"
  },
  {
    id: 3,
    description: "analyzed competitor pricing strategies.",
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
              <div>
                <p className="text-sm">
                  <span className="font-medium">You</span> {activity.description}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
