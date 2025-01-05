
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, TrendingUp, Layers, Lightbulb, Heart, BarChart3, Users, Brain, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";

const features = [
  {
    icon: TrendingUp,
    title: "Full Data Ownership",
    description: "Your data lives in your own Google Sheets - giving you complete control, portability, and freedom to analyze or extend it however you want.",
    href: "/features/data-ownership"
  },
  {
    icon: Timer,
    title: "25-Minute Growth Sprints",
    description: "Break down complex growth initiatives into focused, actionable tasks designed to fit within a single Pomodoro session.",
    href: "/features/growth-sprints"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your momentum with intelligent tracking of daily wins, achievements, and growth metrics specific to SaaS businesses.",
    href: "/features/progress-tracking"
  },
  {
    icon: Layers,
    title: "Structured Framework",
    description: "Follow a proven methodology for sustainable growth, focusing on key areas like acquisition, retention, and revenue optimization.",
    href: "/features/framework"
  },
  {
    icon: Lightbulb,
    title: "Growth Ideas Library",
    description: "Access a curated collection of proven SaaS growth tactics and strategies, ready to be implemented in 25-minute focused sessions.",
    href: "/features/growth-ideas"
  },
  {
    icon: Heart,
    title: "Achievement System",
    description: "Stay motivated with gamified progress tracking and unlock achievements as you hit growth milestones.",
    href: "/features/achievements"
  },
  
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together efficiently with shared dashboards, team leaderboards, and collaborative growth planning.",
    href: "/features/collaboration"
  },
  {
    icon: Brain,
    title: "AI Growth Assistant",
    description: "Get intelligent suggestions and insights powered by machine learning to optimize your growth strategy.",
    href: "/features/ai-assistant"
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Fully open source under MIT license - inspect, modify and contribute to make Growthlog better for everyone.",
    href: "https://github.com/yourusername/growthlog"
  }
];

export default function Features() {
  const { user, isLoading, loginWithGoogle, logout } = useAuth();
  return (
    <div className="min-h-screen bg-background">
      <MarketingTopNav />

      <main className="mx-auto px-6">
        <div className="pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-[700px] mx-auto text-center space-y-6"
          >
            <Badge variant="secondary" className="mb-2">
              Features
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight">
              Everything you need to grow
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
              A complete toolkit for sustainable SaaS growth, designed to help you 
              focus on what matters most - building and growing your business.
            </p>
          </motion.div>
        </div>

        <div className="max-w-[1200px] mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <feature.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="font-medium">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
