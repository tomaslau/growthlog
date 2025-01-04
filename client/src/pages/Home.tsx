import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  const features = [
    "Break down complex growth initiatives into 25-minute tasks",
    "Track your progress with SaaS-specific metrics",
    "Access proven growth tactics and templates",
    "Build momentum with achievement system",
    "Share your growth journey publicly"
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-semibold tracking-tight">Growthlog</h1>
        <div className="flex items-center gap-4">
          <Link href="/manifesto">
            <Button variant="ghost">Manifesto</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6">
            Growth made
            <span className="text-primary"> simple</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Break down complex SaaS growth initiatives into actionable 25-minute tasks.
            Track your progress, learn proven tactics, and build momentum.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/dashboard">
              <Button size="lg" className="w-full md:w-auto">
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-muted rounded-lg p-6 aspect-square">
            {/* Placeholder for product screenshot or illustration */}
            <div className="w-full h-full rounded bg-muted-foreground/10 flex items-center justify-center text-muted-foreground">
              Product Screenshot
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
