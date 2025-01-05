import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { Timer, TrendingUp, Layers, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

export default function ProgressTracking() {
  const { user, isLoading, loginWithGoogle } = useAuth();

  const metrics = [
    {
      title: "Daily Progress",
      description: "Track completed tasks and daily momentum",
      stats: {
        label: "Completed Tasks",
        value: "12/15",
        progress: 80
      }
    },
    {
      title: "Weekly Stats",
      description: "Monitor your weekly performance and growth score",
      stats: {
        label: "Growth Score",
        value: "85%",
        progress: 85
      }
    },
    {
      title: "Achievements",
      description: "Unlock milestones as you progress",
      stats: {
        label: "Unlocked",
        value: "8/12",
        progress: 66
      }
    }
  ];

  const features = [
    {
      title: "Intelligent Tracking",
      description: "Track daily wins, achievements, and growth metrics specific to SaaS businesses"
    },
    {
      title: "Visual Analytics",
      description: "Beautiful charts and visualizations to understand your progress at a glance"
    },
    {
      title: "Achievement System",
      description: "Stay motivated with gamified progress tracking and milestone unlocks"
    },
    {
      title: "Performance Insights",
      description: "Get actionable insights based on your progress patterns and achievements"
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
              <h1 className="text-4xl font-bold tracking-tight">Progress Tracking</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                Monitor your momentum with intelligent tracking of daily wins, achievements, and growth metrics specific to SaaS businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {index === 0 ? (
                        <Timer className="h-4 w-4 text-primary" />
                      ) : index === 1 ? (
                        <TrendingUp className="h-4 w-4 text-primary" />
                      ) : (
                        <Layers className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <h3 className="font-medium">{metric.title}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{metric.stats.label}</span>
                      <span className="font-medium">{metric.stats.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ width: `${metric.stats.progress}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4 py-12">
              <h2 className="text-2xl font-bold">Start Tracking Your Progress</h2>
              <p className="text-sm text-muted-foreground">
                Join successful founders who use Growthlog to track and optimize their growth journey.
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