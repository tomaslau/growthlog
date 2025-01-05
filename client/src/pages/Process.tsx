import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Target, ArrowRight, BarChart2, Brain, FileSpreadsheet, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Link } from "wouter";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";

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
                      A platform for transforming business development processes
                      into actionable insights through strategic tracking and
                      optimization.
                    </p>
                    <div className="flex items-center space-x-3 pt-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-900 transition-colors"
                        aria-label="View on GitHub"
                        href="https://github.com"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                        >
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
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
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Features</h4>
                    <ul className="space-y-3 text-sm text-zinc-500">
                      <li>
                        <Link href="/features/growth-sprints">
                          25-Minute Growth Sprints
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/progress-tracking">
                          Progress Tracking
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/framework">
                          Structured Framework
                        </Link>
                      </li>
                      <li>
                        <Link href="/features/growth-ideas">
                          Growth Ideas Library
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Product</h4>
                    <ul className="space-y-3 text-sm text-zinc-500">
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/pricing">Pricing</Link>
                      </li>
                      <li>
                        <Link href="/process">Process</Link>
                      </li>
                      <li>
                        <Link href="/integrations">Integrations</Link>
                      </li>
                      <li>
                        <Link href="/documentation">Documentation</Link>
                      </li>
                      <li>
                        <Link href="/updates">Updates</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Resources</h4>
                    <ul className="space-y-3 text-sm text-zinc-500">
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="/report-issue">Report Issue</Link>
                      </li>
                      <li>
                        <Link href="/status">Status</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Legal</h4>
                    <ul className="space-y-3 text-sm text-zinc-500">
                      <li>
                        <Link href="/license">License</Link>
                      </li>
                      <li>
                        <Link href="/terms">Terms</Link>
                      </li>
                      <li>
                        <Link href="/privacy">Privacy</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <div>
                    2025 © Growthlog - A platform for transforming business
                    development processes into actionable insights. Standing on
                    the shoulders of giants.
                  </div>
                  <div className="flex items-center gap-2">
                    Built by{" "}
                    <a
                      href="https://craftled.com"
                      className="inline-flex items-center hover:text-zinc-800"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 154 154"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <rect
                          width="154"
                          height="154"
                          rx="77"
                          fill="#0A0A0A"
                        ></rect>
                        <path
                          d="M77.8 106.2C71.9667 106.2 66.85 105.033 62.45 102.7C58.05 100.333 54.6333 97.05 52.2 92.85C49.8 88.65 48.6 83.8 48.6 78.3C48.6 72.7333 49.8 67.9167 52.2 63.85C54.6333 59.75 58.05 56.5667 62.45 54.3C66.85 52.0333 71.9667 50.9 77.8 50.9C82.1667 50.9 86.0333 51.55 89.4 52.85C92.7667 54.1167 95.5833 55.8 97.85 57.9C100.117 60 101.833 62.3 103 64.8C104.167 67.3 104.75 69.7833 104.75 72.25C104.75 72.2833 104.75 72.35 104.75 72.45C104.75 72.5167 104.75 72.5833 104.75 72.65H89.4C89.4 72.45 89.3833 72.2667 89.35 72.1C89.35 71.9 89.3167 71.7 89.25 71.5C88.9833 70.1 88.4 68.7833 87.5 67.55C86.6 66.3167 85.3333 65.3167 83.7 64.55C82.1 63.75 80.1 63.35 77.7 63.35C75.1333 63.35 72.8333 63.9167 70.8 65.05C68.8 66.1833 67.2167 67.8667 66.05 70.1C64.8833 72.3 64.3 75.0333 64.3 78.3C64.3 81.5 64.8833 84.2667 66.05 86.6C67.2167 88.9 68.8 90.6667 70.8 91.9C72.8333 93.1333 75.1333 93.75 77.7 93.75C80.3333 93.75 82.4833 93.35 84.15 92.55C85.8167 91.7167 87.0667 90.6167 87.9 89.25C88.7333 87.85 89.2333 86.3167 89.4 84.65H104.75C104.75 87.1167 104.167 89.6333 103 92.2C101.867 94.7333 100.167 97.05 97.9 99.15C95.6667 101.25 92.8667 102.95 89.5 104.25C86.1333 105.55 82.2333 106.2 77.8 106.2Z"
                          fill="white"
                        ></path>
                      </svg>
                      <span className="ml-1">Craftled</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}