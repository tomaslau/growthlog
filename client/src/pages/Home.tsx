import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 linear-nav">
        <div className="flex h-[52px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-foreground rounded-sm" />
            <h1 className="text-[13px] font-semibold tracking-tight">Growthlog</h1>
          </Link>

          <nav className="flex flex-1 items-center justify-center gap-5 text-[13px] font-medium">
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="/method" className="nav-link">Method</Link>
            <Link href="/customers" className="nav-link">Customers</Link>
            <Link href="/changelog" className="nav-link">Changelog</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/company" className="nav-link">Company</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/demo" className="nav-link">Demo</Link>
          </nav>

          <div className="flex items-center gap-3 text-[13px]">
            <Link href="/login" className="flex items-center">
              <Button variant="secondary" size="sm" className="login-button h-7 rounded px-3 text-[13px] font-medium">
                Log in
                <span className="ml-2 text-[11px] text-muted-foreground/70">L</span>
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="default" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
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