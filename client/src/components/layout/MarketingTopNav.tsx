import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { href: "/features", label: "Features" },
  { href: "/process", label: "Process" },
  { href: "/ideas", label: "Growth Ideas" },
  { href: "/updates", label: "Updates" },
  { href: "/pricing", label: "Pricing" },
];

export function MarketingTopNav() {
  const { user, isLoading, loginWithGoogle, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center px-6 pt-4 z-50">
      <header className="w-full max-w-[1200px] h-14 border border-border bg-background rounded-md">
        <div className="flex h-14 items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-5 w-5" />
            <h1 className="text-[13px] font-semibold tracking-tight text-foreground">
              Growthlog
            </h1>
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
            {menuItems.map(({ href, label }) => (
              <MarketingNavLink key={href} href={href}>
                {label}
              </MarketingNavLink>
            ))}
            <a
              href="mailto:support@growthlog.co"
              className="text-[13px] font-medium text-muted-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Support
            </a>
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            {!isLoading && user && (
              <>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="h-7 rounded px-3 text-[13px] font-medium bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button
                  onClick={logout}
                  variant="secondary"
                  size="sm"
                  className="h-7 rounded px-3 text-[13px] font-medium"
                >
                  Log out
                </Button>
              </>
            )}
            {!isLoading && !user && (
              <Button
                onClick={loginWithGoogle}
                variant="secondary"
                size="sm"
                className="h-7 rounded px-3 text-[13px] font-medium"
              >
                Sign in with Google
              </Button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[60px] left-0 right-0 mx-6 p-4 border border-border bg-background/80 backdrop-blur-xl rounded-md">
            <nav className="flex flex-col gap-4">
              {menuItems.map(({ href, label }) => (
                <MarketingNavLink key={href} href={href}>
                  {label}
                </MarketingNavLink>
              ))}
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