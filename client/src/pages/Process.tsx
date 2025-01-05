import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Target, ArrowRight, BarChart2, Brain, FileSpreadsheet, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Link } from "wouter";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";
import { MarketingFooter } from "@/components/layout/MarketingFooter"; // Assuming MarketingFooter is defined elsewhere

export default function Process() {
  const { user, isLoading, loginWithGoogle, logout } = useAuth();
  const pillars = [
    {
      icon: Target,
      title: "Systematic Execution",
      description: "Break down complex growth initiatives into clear, actionable tasks. No more feeling overwhelmed by your growth todo list - just focused, achievable sprints."
    },
    {
      icon: Timer,
      title: "Momentum Over Perfection",
      description: "While daily streaks can be motivating, they often lead to burnout. We focus on your overall momentum. Some weeks you'll sprint, others you'll need to recover. What matters is your trajectory over time."
    },
    {
      icon: BarChart2,
      title: "Compound Growth",
      description: "SaaS growth isn't about massive overnight wins. It's about consistent, incremental improvements that compound. Each 25-minute sprint moves you forward, and these small wins accumulate into significant results."
    },
    {
      icon: Brain,
      title: "Data-Driven Progress",
      description: "Track what matters. From activation rates to churn metrics, our framework focuses on the numbers that drive SaaS growth. Convert data into insights, insights into actions, and actions into results."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <MarketingTopNav />

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
            {/* Hero Section */}
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-[-0.02em] leading-[1.1]">The Growthlog Process</h1>
              <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-[600px] mx-auto">
                Great SaaS companies aren't built through random acts of marketing. They're built through systematic, focused execution.
              </p>
            </div>

            {/* Data Ownership Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileSpreadsheet className="h-5 w-5" />
                  Your Data, Your Way
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    We believe in true data ownership and portability. With Growthlog's Google Sheets integration:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Your growth data lives in your own Google Sheets, giving you complete control and ownership",
                      "No vendor lock-in - your data is always accessible and portable",
                      "Work your way - customize and extend the spreadsheet to match your workflow",
                      "Seamless integration with other tools in your growth stack",
                      "Export, analyze, and visualize your data however you want"
                    ].map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Core Process */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">The Core Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">Our process transforms complex SaaS growth initiatives into manageable daily wins:</p>
                <div className="grid gap-3 text-sm">
                  {[
                    "Break Down - Convert big growth initiatives into 25-minute tasks",
                    "Execute - Complete focused daily sprints",
                    "Track - Monitor your momentum and progress",
                    "Learn - Use data to iterate and improve",
                    "Repeat - Build compound growth through consistency"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 25-Minute Sprints */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Why 25-Minute Sprints?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Twenty-five minutes isn't arbitrary - it's the scientifically-backed sweet spot for maintaining peak focus while preventing mental fatigue. For busy founders and marketers, it means you can drive meaningful growth even on your most hectic days.
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-sm mb-2">What you can achieve in a focused 25-minute sprint:</p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Write and schedule a week's worth of social posts",
                      "Analyze your conversion funnel and identify top friction points",
                      "Set up and launch an A/B test",
                      "Create a high-converting landing page variant",
                      "Implement a new onboarding email sequence"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Timer className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Four Pillars */}
            <div>
              <h2 className="text-lg font-bold mb-4">The Four Pillars</h2>
              <div className="grid gap-4">
                {pillars.map((pillar, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <pillar.icon className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="font-medium text-sm">{pillar.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How It Works in Practice</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 text-sm">
                  <div>
                    <h3 className="font-medium mb-2">1. Access the Growth Ideas Library</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Browse proven SaaS growth tactics</li>
                      <li>• Each tactic is pre-broken into 25-minute sprints</li>
                      <li>• Filter by your current growth priorities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">2. Plan Your Sprint</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Choose your focus area (acquisition, retention, revenue)</li>
                      <li>• Select your next 25-minute task</li>
                      <li>• Set clear success criteria</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">3. Execute With Focus</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Use our built-in timer</li>
                      <li>• Follow the structured sprint format</li>
                      <li>• Document your progress</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">4. Track & Iterate</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Monitor key metrics</li>
                      <li>• Celebrate wins</li>
                      <li>• Adjust based on results</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Open Source Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Github className="h-5 w-5" />
                  Open Source & Community-Driven
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Growthlog is proudly open source under the MIT license. We believe in transparency, collaboration, and giving back to the community:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {[
                      "Full source code available on GitHub",
                      "MIT licensed - use, modify, and distribute freely",
                      "Community contributions welcome",
                      "Transparent development process",
                      "Build and customize to fit your needs"
                    ].map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      onClick={() => window.open('https://github.com/yourusername/growthlog', '_blank')}
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center space-y-4 py-8">
              <h2 className="text-lg font-bold">Start Your Growth Journey Today</h2>
              <p className="text-sm text-muted-foreground">
                Success in SaaS isn't about working harder - it's about working smarter. Start with a single 25-minute sprint.
              </p>
              <Button size="lg" className="mt-2">
                Get Started Now
              </Button>
            </div>

            </div>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}