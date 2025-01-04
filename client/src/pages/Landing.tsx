import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function LandingNav() {
  return (
    <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg z-50">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a className="font-bold text-xl">Growthlog</a>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#features">
            <a className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
          </Link>
          <Link href="#method">
            <a className="text-sm text-white/70 hover:text-white transition-colors">Method</a>
          </Link>
          <Link href="#customers">
            <a className="text-sm text-white/70 hover:text-white transition-colors">Customers</a>
          </Link>
          <Link href="#changelog">
            <a className="text-sm text-white/70 hover:text-white transition-colors">Changelog</a>
          </Link>
          <Link href="#pricing">
            <a className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
          </Link>
          <Link href="#company">
            <a className="text-sm text-white/70 hover:text-white transition-colors">Company</a>
          </Link>
          <Link href="#contact">
            <a className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white/70 hover:text-white">
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LandingNav />
      
      <main className="pt-32 pb-16 container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Track your SaaS growth with purpose-built tools
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Meet the system for modern software development.
            Streamline issues, projects, and product roadmaps.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8">
              Start building
            </Button>
            <Link href="#product-tour">
              <a className="text-sm text-white/70 hover:text-white transition-colors">
                Introducing Customer Requests →
              </a>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
