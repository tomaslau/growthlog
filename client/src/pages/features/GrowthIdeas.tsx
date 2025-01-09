import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Timer, TrendingUp, ChevronRight } from "lucide-react";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter";
import { motion } from "framer-motion";
import { Link } from "wouter";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const features = [
  {
    icon: Lightbulb,
    title: "Ready-to-Use Growth Ideas",
    description: "Access a curated library of proven SaaS growth tactics, each broken down into actionable tasks and supported by real-world examples.",
    benefits: [
      "Proven strategies from successful SaaS companies",
      "Complete implementation guides",
      "ROI and difficulty indicators",
      "Success metrics tracking"
    ]
  },
  {
    icon: Timer,
    title: "25-Minute Implementation",
    description: "Every growth idea is structured into focused 25-minute tasks, making it easy to execute even with a busy schedule.",
    benefits: [
      "Focused execution blocks",
      "Clear task priorities",
      "Progress tracking",
      "Time-boxed activities"
    ]
  },
  {
    icon: TrendingUp,
    title: "Results Tracking",
    description: "Monitor the impact of each implemented idea with built-in metrics tracking and success indicators.",
    benefits: [
      "Key metrics dashboard",
      "Success rate tracking",
      "Impact assessment",
      "ROI calculations"
    ]
  }
];

export default function GrowthIdeas() {
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
              <h1 className="text-4xl font-bold tracking-tight">Growth Ideas Library</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px] mx-auto">
                Transform your SaaS growth with our curated collection of proven tactics, each designed for focused 25-minute implementation sessions.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 py-12"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <feature.icon className="h-4 w-4 text-primary" />
                            </div>
                            <h3 className="text-xl font-medium">{feature.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium mb-3">Key Benefits</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {feature.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <ChevronRight className="h-3 w-3 text-primary" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center space-y-4 py-12">
              <h2 className="text-2xl font-bold">Start Growing Today</h2>
              <p className="text-sm text-muted-foreground">
                Join successful founders who use our growth ideas to drive systematic, predictable growth.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Button asChild size="lg">
                  <Link href="/signup">Try It Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/features">View All Features</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}