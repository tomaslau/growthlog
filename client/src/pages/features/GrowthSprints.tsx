import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { Link } from "wouter";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";
import { Timer, ArrowRight, Brain, Target, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PomodoroTimer from "@/components/tasks/PomodoroTimer";
import MarketingFooter from "@/components/MarketingFooter"; // Assuming this component exists

export default function GrowthSprints() {
  const { user, isLoading, loginWithGoogle, logout } = useAuth();

  const benefits = [
    {
      title: "Break Down Complex Tasks",
      description: "Transform overwhelming growth initiatives into manageable 25-minute focused sessions"
    },
    {
      title: "Stay Focused",
      description: "Leverage the science-backed Pomodoro technique to maintain peak productivity"
    },
    {
      title: "Track Progress",
      description: "Monitor your daily wins and see how small actions compound into significant growth"
    },
    {
      title: "Build Momentum",
      description: "Create sustainable growth habits through consistent, focused execution"
    }
  ];

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

      <main className="max-w-[1200px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="max-w-[800px] mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <Badge variant="secondary" className="mb-2">
                Core Feature
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight">25-Minute Growth Sprints</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                Break down complex growth initiatives into focused, actionable tasks designed to fit within a single Pomodoro session.
              </p>
            </div>

            {/* Demo Timer Section */}
            <div className="bg-[#0A0A0A] rounded-lg p-8 flex items-center justify-center">
              <div className="max-w-sm w-full">
                <PomodoroTimer taskId={1} taskTitle="Try a Growth Sprint" />
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">{benefit.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Example Sprints */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Example Growth Sprints</h2>
              <div className="space-y-4">
                {[
                  "Write and schedule a week's worth of social posts",
                  "Analyze your conversion funnel and identify top friction points",
                  "Set up and launch an A/B test",
                  "Create a high-converting landing page variant",
                  "Implement a new onboarding email sequence"
                ].map((sprint, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <Timer className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{sprint}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-4 py-12">
              <h2 className="text-2xl font-bold">Start Your First Sprint</h2>
              <p className="text-sm text-muted-foreground">
                Experience the power of focused execution. Start with just 25 minutes.
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