
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, BarChart3, ChevronRight } from "lucide-react";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";

const frameworks = [
  {
    icon: Users,
    title: "Acquisition",
    description: "Implement proven strategies to attract and convert qualified leads into customers.",
    metrics: ["Traffic Growth", "Conversion Rate", "CAC", "Lead Quality Score"]
  },
  {
    icon: Heart,
    title: "Retention",
    description: "Build lasting relationships and maximize customer lifetime value through engagement.",
    metrics: ["Churn Rate", "NPS Score", "Feature Adoption", "Time to Value"]
  },
  {
    icon: BarChart3,
    title: "Revenue",
    description: "Optimize pricing, reduce churn, and unlock new revenue streams systematically.",
    metrics: ["MRR Growth", "ARPU", "LTV", "Revenue Churn"]
  }
];

export default function Framework() {
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
              <h1 className="text-4xl font-bold tracking-tight">Structured Framework</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                Follow a proven methodology for sustainable growth, focusing on key areas like acquisition, retention, and revenue optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 py-12">
              {frameworks.map((framework, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <framework.icon className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="text-xl font-medium">{framework.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{framework.description}</p>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium mb-3">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {framework.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <ChevronRight className="h-3 w-3 text-primary" />
                            <span className="text-sm text-muted-foreground">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-4 py-12">
              <h2 className="text-2xl font-bold">Start Growing Systematically</h2>
              <p className="text-sm text-muted-foreground">
                Join successful founders who use our framework to drive sustainable growth.
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
