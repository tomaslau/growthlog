
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

export function MarketingTopNav() {
  const { user, isLoading, loginWithGoogle, logout } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center px-6 pt-4">
      <header className="w-full max-w-[1200px] h-14 border border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-md">
        <div className="flex h-14 items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <h1 className="text-[13px] font-semibold tracking-tight">Growthlog</h1>
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            <MarketingNavLink href="/features">Features</MarketingNavLink>
            <MarketingNavLink href="/process">Process</MarketingNavLink>
            <MarketingNavLink href="/ideas">Growth Ideas</MarketingNavLink>
            <MarketingNavLink href="/updates">Updates</MarketingNavLink>
            <MarketingNavLink href="/pricing">Pricing</MarketingNavLink>
            <a 
              href="mailto:support@growthlog.co" 
              className="text-[13px] font-medium text-muted-foreground/80 hover:text-foreground transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:support@growthlog.co";
              }}
            >
              Support
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="w-[130px]">
              <Button 
                onClick={loginWithGoogle} 
                variant="secondary" 
                size="sm" 
                className="h-7 w-full rounded px-3 text-[13px] font-medium transition-opacity"
              >
                {!isLoading && user ? "Log out" : "Sign in with Google"}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
