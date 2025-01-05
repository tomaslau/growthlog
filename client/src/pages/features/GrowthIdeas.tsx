
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Timer, TrendingUp, ChevronRight } from "lucide-react";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

const ideas = [
  {
    icon: Lightbulb,
    title: "Proven Growth Tactics",
    description: "Access battle-tested strategies backed by real-world success stories and implementation guides.",
    metrics: ["Success Rate", "Time to ROI", "Implementation Cost", "Difficulty Level"]
  },
  {
    icon: Timer,
    title: "Ready-to-Execute Tasks",
    description: "Each strategy broken down into focused 25-minute implementation sprints for immediate action.",
    metrics: ["Time per Task", "Tasks per Strategy", "Completion Rate", "Task Dependencies"]
  },
  {
    icon: TrendingUp,
    title: "Impact Tracking",
    description: "Track the effectiveness of implemented strategies with built-in metrics and analytics.",
    metrics: ["Growth Rate", "Conversion Impact", "Revenue Delta", "User Engagement"]
  }
];

export default function GrowthIdeas() {
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
              <h1 className="text-3xl font-bold tracking-tight">Growth Ideas Library</h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                Access a curated collection of proven SaaS growth tactics and strategies, ready to be implemented in 25-minute focused sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {ideas.map((idea, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <idea.icon className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="text-xl font-medium">{idea.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{idea.description}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {idea.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            <span className="text-sm text-muted-foreground">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4 py-12">
              <h2 className="text-2xl font-bold">Start Growing Strategically</h2>
              <p className="text-sm text-muted-foreground">
                Join successful founders who use our growth ideas to drive systematic growth.
              </p>
              <Button size="lg" className="mt-4">
                Try it Now
              </Button>
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
