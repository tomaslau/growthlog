
import { Badge } from "@/components/ui/badge";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { Users, MessageSquare, Share2, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Team Workspaces",
    description: "Create shared workspaces for your team to collaborate on growth initiatives together"
  },
  {
    title: "Real-time Comments",
    description: "Discuss growth ideas and provide feedback directly within tasks and sprints"
  },
  {
    title: "Progress Sharing",
    description: "Share achievements and milestones with team members to maintain momentum"
  },
  {
    title: "Team Analytics",
    description: "Track team performance and identify areas for improvement with detailed analytics"
  }
];

export default function Collaboration() {
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
              <h1 className="text-4xl font-bold tracking-tight">Team Collaboration</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                Work together efficiently with shared dashboards, team leaderboards, and collaborative growth planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {index === 0 && <Users className="h-4 w-4 text-primary" />}
                      {index === 1 && <MessageSquare className="h-4 w-4 text-primary" />}
                      {index === 2 && <Share2 className="h-4 w-4 text-primary" />}
                      {index === 3 && <Target className="h-4 w-4 text-primary" />}
                      <h3 className="font-medium">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4 py-12">
              <h2 className="text-2xl font-bold">Start Collaborating Today</h2>
              <p className="text-sm text-muted-foreground">
                Join successful teams who use Growthlog to collaborate and achieve growth goals together.
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
