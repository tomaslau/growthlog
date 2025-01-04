import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timer, TrendingUp, Layers, Target } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Manifesto() {
  const principles = [
    {
      icon: Timer,
      title: "25-Minute Growth Sprints",
      description: "Every task is designed to fit within a single Pomodoro session (25 minutes). This isn't arbitrary - it's the scientifically-backed sweet spot for maintaining peak focus while preventing mental fatigue. For SaaS founders and marketers, this means you can make meaningful progress even during the busiest days."
    },
    {
      icon: TrendingUp,
      title: "Momentum Over Streaks",
      description: "While daily streaks can be motivating, they often lead to burnout or 'checkbox mentality'. We focus on your overall momentum and progress trends. This approach acknowledges that growth isn't linear - some weeks you'll sprint, others you'll need to recover. What matters is your trajectory over time."
    },
    {
      icon: Layers,
      title: "Incremental Progress",
      description: "SaaS growth isn't about massive overnight wins - it's about consistent, incremental improvements that compound over time. Each 25-minute task moves you forward, and these small wins accumulate into significant results. This approach reduces overwhelm and maintains sustainable progress."
    },
    {
      icon: Target,
      title: "SaaS-Specific Framework",
      description: "Every growth idea and task is specifically crafted for SaaS businesses. From improving activation rates to reducing churn, our framework focuses on the metrics and activities that matter most in the SaaS world. No generic productivity fluff - just proven SaaS growth tactics broken into actionable steps."
    }
  ];

  const benefits = [
    "Clear focus: One 25-minute task at a time",
    "Reduced overwhelm: Complex growth initiatives broken into manageable chunks",
    "Sustainable pace: Progress without burnout",
    "Measurable results: Track your momentum with SaaS-specific metrics",
    "Ready-to-use playbooks: Proven growth tactics with step-by-step implementation"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8 pb-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Badge variant="secondary" className="mb-4">Our Philosophy</Badge>
        <h1 className="text-4xl font-bold mb-4">The Growthlog Manifesto</h1>
        <p className="text-lg text-muted-foreground">
          A new approach to SaaS growth, designed for founders and marketers who believe in sustainable, focused progress.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6"
      >
        {principles.map((principle, index) => (
          <motion.div key={index} variants={item}>
            <Card className="hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <principle.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{principle.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.8 }}
      >
        <Card className="hover:border-primary/50 transition-colors">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Why This Works</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div 
        className="text-center py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-lg font-medium mb-4">Ready to grow your SaaS?</p>
        <p className="text-muted-foreground">
          Start with a single 25-minute task. That's all it takes to begin building momentum.
        </p>
      </motion.div>
    </motion.div>
  );
}