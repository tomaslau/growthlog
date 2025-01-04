import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Logo } from "@/components/ui/logo";
import { Timer, TrendingUp, Layers, Lightbulb, ChevronRight, Users, Heart, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CraftledLogo, BestWritingLogo } from "@/components/logos";
import PomodoroTimer from "@/components/tasks/PomodoroTimer";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const features = [
    {
      icon: Timer,
      title: "25-Minute Growth Sprints",
      description: "Break down complex growth initiatives into focused, actionable tasks designed to fit within a single Pomodoro session."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your momentum with intelligent tracking of daily wins, achievements, and growth metrics specific to SaaS businesses."
    },
    {
      icon: Layers,
      title: "Structured Framework",
      description: "Follow a proven methodology for sustainable growth, focusing on key areas like acquisition, retention, and revenue optimization."
    },
    {
      icon: Lightbulb,
      title: "Growth Ideas Library",
      description: "Access a curated collection of proven SaaS growth tactics and strategies, ready to be implemented in 25-minute focused sessions."
    }
  ];

  const companies = [
    { logo: CraftledLogo, name: "Craftled" },
    { logo: BestWritingLogo, name: "Best Writing" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 flex justify-center px-6 pt-4">
        <header className="w-full max-w-[1200px] h-14 border border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md">
          <div className="flex h-14 items-center px-6">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <h1 className="text-[13px] font-semibold tracking-tight">Growthlog</h1>
            </Link>

            <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-[13px] font-medium">
              <Link href="/features" className="nav-link">Features</Link>
              <Link href="/method" className="nav-link">Method</Link>
              <Link href="/customers" className="nav-link">Customers</Link>
              <Link href="/changelog" className="nav-link">Changelog</Link>
              <Link href="/pricing" className="nav-link">Pricing</Link>
              <Link href="/company" className="nav-link">Company</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/login">
                <Button variant="secondary" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
                  Log in
                  <span className="ml-2 text-[11px] text-muted-foreground/70">L</span>
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="default" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </header>
      </div>

      <main className="max-w-[1200px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="max-w-[800px] mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold tracking-[-0.02em] leading-[1.1]">
              Transform SaaS growth into
              <br />
              focused 25-minute wins
            </h1>

            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-[600px] mx-auto">
              Meet the system designed for sustainable SaaS growth. Transform complex initiatives into 25-minute focused sprints, track your momentum, and drive results through incremental progress.
            </p>

            <div className="flex items-center justify-center pt-4">
              <Link href="/dashboard">
                <Button size="lg" className="h-11 px-6 text-[13px] font-medium">
                  Start your growthlog
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pb-24 text-center">
          <h2 className="text-2xl font-semibold mb-2">Powering experiences</h2>
          <p className="text-muted-foreground mb-12">from next-gen startups to enterprises</p>

          <div className="flex justify-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <company.logo className="text-muted-foreground/60 hover:text-muted-foreground/80 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pb-24 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Your Growth Toolkit
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Everything you need to drive sustainable SaaS growth, from focused sprints to proven strategies
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold mb-2">{feature.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="pb-24">
          <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
            <span>Task tracking and sprint planning</span>
            <ChevronRight className="h-4 w-4" />
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              25-Minute Growth Sprints
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              Break down complex growth initiatives into focused, actionable tasks designed to fit within a single Pomodoro session.
            </p>
          </div>

          <div className="bg-[#0A0A0A] rounded-lg p-8 min-h-[400px] flex items-center justify-center">
            <div className="max-w-sm w-full">
              <PomodoroTimer taskId={1} taskTitle="Sample Growth Sprint" />
            </div>
          </div>
        </div>

        {/* Progress Tracking section */}
        <div className="pb-24">
          <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
            <span>Progress tracking</span>
            <ChevronRight className="h-4 w-4" />
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Track Your Growth Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              Monitor your momentum with intelligent tracking of daily wins, achievements, and growth metrics specific to SaaS businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Timer className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Daily Progress</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completed Tasks</span>
                  <span className="font-medium">12/15</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-4/5 bg-primary rounded-full" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Weekly Stats</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Growth Score</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[85%] bg-primary rounded-full" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Layers className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Achievements</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Unlocked</span>
                  <span className="font-medium">8/12</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-2/3 bg-primary rounded-full" />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Structured Framework section */}
        <div className="pb-24">
          <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
            <span>Framework</span>
            <ChevronRight className="h-4 w-4" />
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Structured Framework
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              Follow a proven methodology for sustainable growth, focusing on key areas like acquisition, retention, and revenue optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Acquisition</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Implement proven strategies to attract and convert qualified leads into customers.
              </p>
            </Card>

            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Retention</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Build lasting relationships and maximize customer lifetime value through engagement.
              </p>
            </Card>

            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Revenue</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Optimize pricing, reduce churn, and unlock new revenue streams systematically.
              </p>
            </Card>
          </div>
        </div>

      </main>
    </div>
  );
}