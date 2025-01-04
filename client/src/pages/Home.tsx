import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex justify-between items-center px-6 py-4 text-sm">
        <h1 className="font-semibold">Growthlog</h1>
        <nav className="flex items-center gap-8 text-muted-foreground">
          <Link href="/features">Features</Link>
          <Link href="/method">Method</Link>
          <Link href="/customers">Customers</Link>
          <Link href="/changelog">Changelog</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/company">Company</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/demo">Demo</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">Log in</Link>
          <Link href="/signup">
            <Button variant="default" size="sm">Sign up</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-16">
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