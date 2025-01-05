import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Logo } from "@/components/ui/logo";
import { Timer, TrendingUp, Layers, Lightbulb, ChevronRight, Users, Heart, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CraftledLogo, BestWritingLogo } from "@/components/logos";
import PomodoroTimer from "@/components/tasks/PomodoroTimer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { useAuth } from "@/hooks/use-auth";

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
  const { user, isLoading, loginWithGoogle, logout } = useAuth();
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

            <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
              <MarketingNavLink href="/features">Features</MarketingNavLink>
              <MarketingNavLink href="/method">Method</MarketingNavLink>
              <MarketingNavLink href="/customers">Customers</MarketingNavLink>
              <MarketingNavLink href="/changelog">Changelog</MarketingNavLink>
              <MarketingNavLink href="/process">Process</MarketingNavLink>
              <MarketingNavLink href="/pricing">Pricing</MarketingNavLink>
              <MarketingNavLink href="/company">Company</MarketingNavLink>
              <MarketingNavLink href="/contact">Contact</MarketingNavLink>
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

        {/* Pricing Section */}
        <div className="pb-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Powerful Features,<br />Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Transform your growth initiatives into actionable wins with our comprehensive SaaS growth platform and straightforward annual pricing.
            </p>
          </div>

          <div className="max-w-5xl mx-auto p-6 rounded-lg bg-card/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth Platform</h3>
                  <p className="text-muted-foreground">
                    A complete toolkit for sustainable SaaS growth. Break down complex initiatives into focused 25-minute sprints and track your progress effectively.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">What's included</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      25-minute growth sprints
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Progress tracking dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Growth framework access
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Task management system
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Achievement tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Metrics visualization
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold">$100</h3>
                    <p className="text-sm text-muted-foreground">per year</p>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full">
                      Get access
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Invoices and receipts available for easy company reimbursement
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Growth ideas library
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Collaborative workspaces
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Real-time analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Export functionality
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Regular updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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

        {/* Growth Ideas Library section */}
        <div className="pb-24">
          <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
            <span>Growth library</span>
            <ChevronRight className="h-4 w-4" />
          </div>

          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Growth Ideas Library
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              Access a curated collection of proven SaaS growth tactics and strategies, ready to be implemented in 25-minute focused sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Growth Tactics</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Proven growth strategies backed by real-world success stories and implementation guides.
              </p>
            </Card>

            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Timer className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Ready-to-Execute</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Each strategy is broken down into focused 25-minute implementation sprints.
              </p>
            </Card>

            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-medium">Impact Tracking</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Track the effectiveness of implemented strategies with built-in metrics.
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pb-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <Tabs defaultValue="general" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
              <TabsTrigger value="license">License</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-6">
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What do I get exactly with Growthlog?</AccordionTrigger>
                  <AccordionContent>
                    With Growthlog, you receive lifetime access to a comprehensive SaaS growth platform. This includes the full suite of growth tracking tools, 25-minute sprint functionality, and access to the growth ideas library. The platform features a robust task management system, growth metrics dashboard, achievement tracking, and detailed examples of proven growth strategies. It's built with modern web technologies for improved performance and developer experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How often is Growthlog updated?</AccordionTrigger>
                  <AccordionContent>
                    We regularly update Growthlog with new features, growth strategies, and performance improvements. Major updates are released monthly, while smaller improvements and bug fixes are deployed weekly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do I need to be an expert to use Growthlog?</AccordionTrigger>
                  <AccordionContent>
                    Not at all! Growthlog is designed to be accessible for both beginners and experienced growth professionals. Our structured framework and step-by-step guides make it easy to get started, while offering advanced features for more experienced users.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="technical" className="mt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What authentication options are available?</AccordionTrigger>
                  <AccordionContent>
                    Growthlog supports multiple authentication methods including Google OAuth, email/password, and single sign-on (SSO) for enterprise customers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I use Growthlog if my tech stack is different?</AccordionTrigger>
                  <AccordionContent>
                    Yes! Growthlog is platform-agnostic and can be integrated with any tech stack through our API. We provide SDKs for major programming languages and frameworks.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="payment" className="mt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards, PayPal, and offer enterprise invoicing for annual plans.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="license" className="mt-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>What type of license do I get?</AccordionTrigger>
                  <AccordionContent>
                    Growthlog comes with a perpetual license for the version you purchase, including 12 months of updates and support.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>

        {/* Copyright Footer */}
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
                    A platform for transforming business development processes into actionable insights through strategic tracking and optimization.
                  </p>
                  <div className="flex items-center space-x-3 pt-2">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 transition-colors"
                      aria-label="View on GitHub"
                      href="https://github.com"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3556 0 11.964C0 17.2488 3.438 21.732 8.2068 23.3136C8.8068 23.424 9.0252 23.0544 9.0252 22.7376C9.0252 22.4544 9.0156 21.7008 9.0096 20.7036C5.6712 21.426 4.9668 19.0992 4.9668 19.0992C4.422 17.718 3.6348 17.3496 3.6348 17.3496C2.5452 16.608 3.7176 16.6224 3.7176 16.6224C4.9212 16.7064 5.5548 17.8548 5.5548 17.8548C6.6252 19.6836 8.364 19.1556 9.0468 18.8484C9.1572 18.0768 9.4668 17.5488 9.81 17.25C7.146 16.9488 4.344 15.9216 4.344 11.3376C4.344 10.032 4.812 8.9628 5.5788 8.1276C5.4552 7.8252 5.0436 6.6084 5.6964 4.962C5.6964 4.962 6.7044 4.6404 8.9964 6.1884C9.97544 5.92201 10.9854 5.78604 12 5.784C13.02 5.7888 14.046 5.9208 15.0048 6.1872C17.2956 4.6392C18.3012 4.9608C18.9564 6.6072 18.548 18.9564 6.6072 18.548 18.4212 8.1264C19.1892 8.9616 19.6548 10.0308 19.6548 11.3364C19.6548 15.9324 19.6548 16.944 14.1756 17.2404C14.6064 17.6088 14.9892 18.3384 14.9892 19.4556C14.9892 21.054 14.9748 22.344 14.9748 22.7364C14.9748 23.0568 15.1908 23.4288 15.8004 23.3124C20.5644 21.7284 24 17.2476 24 11.9628C24 5.3556 18.6264 0 12 0Z"/>
                    </svg>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-900 transition-colors"
                      aria-label="Follow us on X (Twitter)"
                      href="https://twitter.com"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
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
                    <svg width="16" height="16" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <rect width="154" height="154" rx="77" fill="#0A0A0A"></rect>
                      <path d="M77.8 106.2C71.9667 106.2 66.85 105.033 62.45 102.7C58.05 100.333 54.6333 97.05 52.2 92.85C49.8 88.65 48.6 83.8 48.6 78.3C48.6 72.7333 49.8 67.9167 52.2 63.85C54.6333 59.75 58.05 56.5667 62.45 54.3C66.85 52.0333 71.9667 50.9 77.8 50.9C82.1667 50.9 86.0333 51.55 89.4 52.85C92.7667 54.1167 95.5833 55.8 97.85 57.9C100.117 60 101.833 62.3 103 64.8C104.167 67.3 104.75 69.7833 104.75 72.25C104.75 72.2833 104.75 72.35 104.75 72.45C104.75 72.5167 104.75 72.5833 104.75 72.65H89.4C89.4 72.45 89.3833 72.2667 89.35 72.1C89.35 71.9 89.3167 71.7 89.25 71.5C88.9833 70.1 88.4 68.7833 87.5 67.55C86.6 66.3167 85.3333 65.3167 83.7 64.55C82.1 63.75 80.1 63.35 77.7 63.35C75.1333 63.35 72.8333 63.9167 70.8 65.05C68.8 66.1833 67.2167 67.8667 66.05 70.1C64.8833 72.3 64.3 75.0333 64.3 78.3C64.3 81.5 64.8833 84.2667 66.05 86.6C67.2167 88.9 68.8 90.6667 70.8 91.9C72.8333 93.1333 75.1333 93.75 77.7 93.75C80.3333 93.75 82.4833 93.35 84.15 92.55C85.8167 91.7167 87.0667 90.6167 87.9 89.25C88.7333 87.85 89.2333 86.3167 89.4 84.65H104.75C104.75 87.1167 104.167 89.6333 103 92.2C101.867 94.7333 100.167 97.05 97.9 99.15C95.6667 101.25 92.8667 102.95 89.5 104.25C86.1333 105.55 82.2333 106.2 77.8 106.2Z" fill="white"></path>
                    </svg>
                    <span className="ml-1">Craftled</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}