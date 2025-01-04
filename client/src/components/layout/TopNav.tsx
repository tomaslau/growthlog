import { Link, useLocation } from "wouter";
import { Home, Lightbulb, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Lightbulb, label: "Growth Ideas", href: "/ideas" },
  { icon: User, label: "Profile", href: "/profile" }
];

export default function TopNav() {
  const [location] = useLocation();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-14 items-center px-6">
        <div className="mr-8">
          <h1 className="text-lg font-semibold tracking-tight">Growthlog</h1>
        </div>

        <nav className="flex gap-1">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href}>
              <a className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                location === href 
                  ? "text-primary bg-secondary" 
                  : "text-muted-foreground hover:text-foreground"
              )}>
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}