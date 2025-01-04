import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Target } from "lucide-react";

// Mock data - will be replaced with API data
const challenges = [
  {
    id: 1,
    title: "Content Creation Sprint",
    description: "Create 5 pieces of content in a week",
    type: "weekly",
    progress: 3,
    required: 5,
    bonusPoints: 500,
    daysLeft: 3,
    category: "Content"
  },
  {
    id: 2,
    title: "Analytics Master",
    description: "Complete 10 data analysis tasks this month",
    type: "monthly",
    progress: 4,
    required: 10,
    bonusPoints: 1000,
    daysLeft: 12,
    category: "Analytics"
  }
];

export default function ActiveChallenges() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <CardTitle>Active Challenges</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {challenges.map(challenge => (
            <div key={challenge.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
                <Badge variant="outline" className="capitalize">
                  {challenge.type}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span>
                      Progress: {challenge.progress}/{challenge.required}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                </div>
                
                <Progress 
                  value={(challenge.progress / challenge.required) * 100} 
                  className="h-2"
                />
                
                <div className="flex justify-between items-center text-sm">
                  <Badge variant="secondary">{challenge.category}</Badge>
                  <span className="text-yellow-500 font-medium">
                    +{challenge.bonusPoints} bonus points
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
