import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function LandingNav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex h-12 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <a className="font-semibold text-[15px]">Growthlog</a>
              </Link>
            </div>

            <nav className="hidden md:flex items-center">
              <Link href="#features">
                <a className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white/90 transition-colors">Features</a>
              </Link>
              <Link href="#method">
                <a className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white/90 transition-colors">Method</a>
              </Link>
              <Link href="#customers">
                <a className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white/90 transition-colors">Customers</a>
              </Link>
              <Link href="#changelog">
                <a className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white/90 transition-colors">Changelog</a>
              </Link>
              <Link href="#pricing">
                <a className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white/90 transition-colors">Pricing</a>
              </Link>
              <Link href="#company">
                <a className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white/90 transition-colors">Company</a>
              </Link>
              <Link href="#contact">
                <a className="px-3 py-1.5 text-[13px] text-white/50 hover:text-white/90 transition-colors">Contact</a>
              </Link>
            </nav>

            <div className="flex items-center gap-1.5">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-[13px] text-white/60 hover:text-white/90 px-3 h-7">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="text-[13px] px-3 h-7">Sign up</Button>
              </Link>
            </div>
          </div>
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            Track your SaaS growth with purpose-built tools
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
            Meet the system for modern software development.
            Streamline issues, projects, and product roadmaps.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-[15px] font-medium">
              Start building
            </Button>
            <Link href="#product-tour">
              <a className="text-[15px] text-white/60 hover:text-white/90 transition-colors">
                Introducing Customer Requests →
              </a>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}