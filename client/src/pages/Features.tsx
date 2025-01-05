
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, TrendingUp, Layers, Lightbulb, Heart, BarChart3, Users, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

const features = [
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
    icon: BarChart3,
    title: "SaaS Metrics Dashboard",
    description: "Track key performance indicators and visualize your growth journey with beautiful, insightful charts.",
    href: "/features/metrics"
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
  }
];

export default function Features() {
  const { user, isLoading, loginWithGoogle, logout } = useAuth();
  return (
    <div className="min-h-screen bg-background">
      {/* Marketing Navbar */}
      <div className="fixed top-0 left-0 right-0 flex justify-center px-6 pt-4">
        <header className="w-full max-w-[1200px] h-14 border border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md">
          <div className="flex h-14 items-center px-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <h1 className="text-[13px] font-semibold tracking-tight">Growthlog</h1>
            </Link>

            <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
              <MarketingNavLink href="/features">Features</MarketingNavLink>
              <MarketingNavLink href="/process">Process</MarketingNavLink>
              <MarketingNavLink href="/ideas">Growth Ideas</MarketingNavLink>
              <MarketingNavLink href="/updates">Updates</MarketingNavLink>
              <MarketingNavLink href="/pricing">Pricing</MarketingNavLink>
              <MarketingNavLink href="mailto:support@growthlog.co">Support</MarketingNavLink>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              {isLoading ? (
                <div className="h-7 w-24 rounded bg-muted animate-pulse" />
              ) : user ? (
                <Button onClick={() => logout()} variant="secondary" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
                  Log out
                </Button>
              ) : (
                <Button onClick={loginWithGoogle} variant="secondary" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
                  Sign in with Google
                </Button>
              )}
            </div>
          </div>
        </header>
      </div>

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
