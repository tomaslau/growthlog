
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, Target, ArrowRight, BarChart2, Brain, FileSpreadsheet, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";

export default function Process() {
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

      <main className="container mx-auto px-4 sm:px-6">
        <div className="pt-36 pb-24">
        <div className="max-w-[800px] mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold tracking-tight">The Growthlog Process</h1>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Great SaaS companies aren't built through random acts of marketing. They're built through systematic, focused execution.
            </p>
          </div>

          {/* Data Ownership Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Your Data, Your Way
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We believe in true data ownership and portability. With Growthlog's Google Sheets integration:
                </p>
                <ul className="grid gap-2">
                  {[
                    "Your growth data lives in your own Google Sheets, giving you complete control and ownership",
                    "No vendor lock-in - your data is always accessible and portable",
                    "Work your way - customize and extend the spreadsheet to match your workflow",
                    "Seamless integration with other tools in your growth stack",
                    "Export, analyze, and visualize your data however you want"
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Core Process */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>The Core Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">Our process transforms complex SaaS growth initiatives into manageable daily wins:</p>
              <div className="grid gap-3">
                {[
                  "Break Down - Convert big growth initiatives into 25-minute tasks",
                  "Execute - Complete focused daily sprints",
                  "Track - Monitor your momentum and progress",
                  "Learn - Use data to iterate and improve",
                  "Repeat - Build compound growth through consistency"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Four Pillars */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">The Four Pillars</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <pillar.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium">{pillar.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Open Source Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                Open Source & Community-Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Growthlog is proudly open source under the MIT license. We believe in transparency, collaboration, and giving back to the community.
                </p>
                <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/yourusername/growthlog', '_blank')}>
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Start Your Growth Journey Today</h2>
            <p className="text-muted-foreground mb-6">
              Success in SaaS isn't about working harder - it's about working smarter.
            </p>
            <Button size="lg">Get Started Now</Button>
          </div>
        </div>
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}
