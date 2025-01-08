import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function MarketingTopNav() {
  const { user, isLoading, loginWithGoogle } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center px-6 pt-4 z-50">
      <header className="w-full max-w-[1200px] h-14 border border-border bg-background rounded-md">
        <div className="flex h-14 items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-5 w-5" />
            <h1 className="text-[13px] font-semibold tracking-tight text-foreground">Growthlog</h1>
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
            >
              Support
            </a>
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <Button 
              onClick={loginWithGoogle} 
              variant="secondary" 
              size="sm" 
              className="h-7 rounded px-3 text-[13px] font-medium transition-opacity"
            >
              {!isLoading && user ? "Log out" : "Sign in with Google"}
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[60px] left-0 right-0 mx-6 p-4 border border-border bg-background rounded-md">
            <nav className="flex flex-col gap-4">
              <MarketingNavLink href="/features">Features</MarketingNavLink>
              <MarketingNavLink href="/process">Process</MarketingNavLink>
              <MarketingNavLink href="/ideas">Growth Ideas</MarketingNavLink>
              <MarketingNavLink href="/updates">Updates</MarketingNavLink>
              <MarketingNavLink href="/pricing">Pricing</MarketingNavLink>
              <a 
                href="mailto:support@growthlog.co" 
                className="text-[13px] font-medium text-muted-foreground/80 hover:text-foreground transition-colors cursor-pointer"
              >
                Support
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}