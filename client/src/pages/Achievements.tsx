import AchievementGrid from "@/components/achievements/AchievementGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, TrendingUp } from "lucide-react";

const rankLevels = [
  { name: "Beginner", points: 0, icon: "🌱" },
  { name: "Growth Explorer", points: 500, icon: "🚀" },
  { name: "Growth Hacker", points: 1000, icon: "💡" },
  { name: "Growth Master", points: 2500, icon: "🏆" },
  { name: "Growth Legend", points: 5000, icon: "⭐" }
];

const pointSources = [
  { action: "Complete daily tasks", points: "50-100" },
  { action: "Maintain streaks", points: "10 × streak days" },
  { action: "Share growth insights", points: "100" },
  { action: "Complete challenges", points: "200-500" },
  { action: "Help others grow", points: "150" }
];

export default function Achievements() {
  // TODO: Get actual user ID and points from auth context
  const userId = 1; // Mock user ID for now
  const currentPoints = 750; // Mock points for now

  // Calculate current rank
  const currentRank = rankLevels.reduce((prev, curr) => 
    currentPoints >= curr.points ? curr : prev
  );

  // Find next rank
  const nextRankIndex = rankLevels.findIndex(rank => rank.points > currentPoints);
  const nextRank = nextRankIndex !== -1 ? rankLevels[nextRankIndex] : null;

  // Calculate progress to next rank
  const progressToNext = nextRank ? (
    ((currentPoints - currentRank.points) / (nextRank.points - currentRank.points)) * 100
  ) : 100;

  return (
    <div className="container max-w-6xl mx-auto space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Your Growth Journey</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Track your progress and unlock achievements
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-2xl font-bold">{currentPoints}</span>
                  <span className="text-muted-foreground ml-1">points</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold flex items-center gap-2">
                    {currentRank.icon} {currentRank.name}
                  </div>
                  {nextRank && (
                    <p className="text-sm text-muted-foreground">
                      Next: {nextRank.icon} {nextRank.name} at {nextRank.points} pts
                    </p>
                  )}
                </div>
              </div>
              <Progress value={progressToNext} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>Growth Ranks</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Milestone levels in your growth journey
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rankLevels.map((rank, index) => (
                <div 
                  key={rank.name}
                  className={`flex items-center justify-between ${
                    currentPoints >= rank.points 
                      ? "text-foreground" 
                      : "text-muted-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{rank.icon}</span>
                    <span>{rank.name}</span>
                  </div>
                  <span>{rank.points} pts</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 bg-primary/10 rounded-full">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle>Ways to Earn Points</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Various actions to boost your growth score
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {pointSources.map(source => (
              <div 
                key={source.action}
                className="flex items-center justify-between p-3 rounded-lg border bg-card"
              >
                <span>{source.action}</span>
                <span className="font-mono text-sm text-muted-foreground">
                  +{source.points} pts
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AchievementGrid userId={userId} />
    </div>
  );
}