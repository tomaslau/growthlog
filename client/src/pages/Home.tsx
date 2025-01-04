import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Logo } from "@/components/ui/logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-4 left-24 right-24 h-14 border border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md">
        <div className="flex h-14 items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <h1 className="text-[13px] font-semibold tracking-tight">Growthlog</h1>
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-[13px] font-medium">
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="/method" className="nav-link">Method</Link>
            <Link href="/customers" className="nav-link">Customers</Link>
            <Link href="/changelog" className="nav-link">Changelog</Link>
            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/company" className="nav-link">Company</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/demo" className="nav-link">Demo</Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="secondary" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
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

      <main className="max-w-[1200px] mx-auto px-6 pt-36 pb-16">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-[-0.02em] leading-[1.1]">
            Track your SaaS growth
            <br />
            with purpose-built tools
          </h1>

          <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-[600px] mx-auto">
            Meet the system designed for sustainable SaaS growth. Transform complex initiatives into 25-minute focused sprints, track your momentum, and drive results through incremental progress.
          </p>

          <div className="flex items-center justify-center pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="h-11 px-6 text-[13px] font-medium">
                Start your growthlog
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}