import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center gap-4 px-4 sm:gap-8 sm:px-6 lg:px-8">
          <Link href="/">
            <h1 className="text-sm font-semibold">Growthlog</h1>
          </Link>

          <nav className="flex h-full flex-1 items-center gap-6 text-[13px]">
            <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="/method" className="text-muted-foreground hover:text-foreground transition-colors">Method</Link>
            <Link href="/customers" className="text-muted-foreground hover:text-foreground transition-colors">Customers</Link>
            <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link href="/company" className="text-muted-foreground hover:text-foreground transition-colors">Company</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link href="/demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</Link>
          </nav>

          <div className="flex items-center gap-4 text-[13px]">
            <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">Log in</Link>
            <Link href="/signup">
              <Button variant="default" size="sm" className="h-7 rounded-md px-3 text-[13px]">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 pt-32 pb-16">
        <div className="max-w-[800px] mx-auto text-center space-y-12">
          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            Track your SaaS growth
            <br />
            with purpose-built tools
          </h1>

          <p className="text-xl text-muted-foreground">
            Meet the system for modern software development. Streamline issues, projects, and product roadmaps.
          </p>

          <div className="flex items-center justify-center gap-6">
            <Link href="/dashboard">
              <Button size="lg" className="h-12 px-6">
                Start building
              </Button>
            </Link>
            <Link href="/method">
              <Button variant="link" size="lg" className="text-muted-foreground">
                Introducing Customer Requests
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}