
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Timer, TrendingUp, Layers, Lightbulb, Heart, BarChart3, Users, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { Logo } from "@/components/ui/logo";

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

      {/* Footer */}
      <footer className="border-t border-zinc-200/80 mt-24">
        <div className="container mx-auto px-6 py-8 max-w-6xl">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 pb-8 border-b border-zinc-200/80">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Logo className="text-[#2F363F]" />
                  <h3 className="font-semibold text-[#2F363F]">Growthlog</h3>
                </div>
                <p className="text-sm text-zinc-500 max-w-[280px]">
                  A platform for transforming business development processes
                  into actionable insights through strategic tracking and
                  optimization.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Features</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li><Link href="/features/growth-sprints">25-Minute Growth Sprints</Link></li>
                  <li><Link href="/features/progress-tracking">Progress Tracking</Link></li>
                  <li><Link href="/features/framework">Structured Framework</Link></li>
                  <li><Link href="/features/growth-ideas">Growth Ideas Library</Link></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Product</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                  <li><Link href="/process">Process</Link></li>
                  <li><Link href="/integrations">Integrations</Link></li>
                  <li><Link href="/documentation">Documentation</Link></li>
                  <li><Link href="/updates">Updates</Link></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Resources</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/report-issue">Report Issue</Link></li>
                  <li><Link href="/status">Status</Link></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Legal</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li><Link href="/license">License</Link></li>
                  <li><Link href="/terms">Terms</Link></li>
                  <li><Link href="/privacy">Privacy</Link></li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-zinc-400">
              <div>
                2025 © Growthlog - A platform for transforming business development processes into actionable insights. Standing on the shoulders of giants.
              </div>
              <div className="flex items-center gap-2">
                Built by{" "}
                <a href="https://craftled.com" className="inline-flex items-center hover:text-zinc-800">
                  Craftled
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
