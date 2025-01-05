
import { Badge } from "@/components/ui/badge";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { Trophy, Star, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Achievements() {
  const achievements = [
    {
      icon: "🌱",
      name: "First Steps",
      description: "Complete your first task and start your growth journey"
    },
    {
      icon: "📈",
      name: "Analytics Ace",
      description: "Master data-driven decisions with analytics tasks"
    },
    {
      icon: "⭐",
      name: "Growth Legend",
      description: "Complete 100 growth tasks and reach legendary status"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MarketingTopNav />
      
      <main className="max-w-[1200px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="max-w-[800px] mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <Badge variant="secondary" className="mb-2">
                Core Feature
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">Achievement System</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
            Track your growth journey through meaningful milestones. Earn badges and unlock new ranks as you progress in your SaaS growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Growth Ranks</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Progress through different ranks as you complete more tasks and achieve milestones:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🌱</span>
                    <div>
                      <p className="text-sm font-medium">Beginner</p>
                      <p className="text-xs text-muted-foreground">Start your journey</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🚀</span>
                    <div>
                      <p className="text-sm font-medium">Explorer</p>
                      <p className="text-xs text-muted-foreground">10+ tasks completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">⭐</span>
                    <div>
                      <p className="text-sm font-medium">Legend</p>
                      <p className="text-xs text-muted-foreground">100+ tasks completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Medal className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Achievement Badges</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Unlock special badges by completing specific milestones and challenges:
                </p>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.name} className="flex items-center gap-2">
                      <span className="text-xl">{achievement.icon}</span>
                      <div>
                        <p className="text-sm font-medium">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
