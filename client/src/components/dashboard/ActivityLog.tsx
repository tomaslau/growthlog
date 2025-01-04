import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

const activities = [
  { 
    id: 1, 
    description: "completed 1 hours and 58 minutes of deep work.",
    time: "about 18 hours ago"
  },
  { 
    id: 2,
    description: "completed 3 hours and 29 minutes of deep work.",
    time: "about 23 hours ago"
  },
  {
    id: 3,
    description: "completed 2 hours and 0 minutes of deep work.",
    time: "2 days ago"
  }
];

export default function ActivityLog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Activity</CardTitle>
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
