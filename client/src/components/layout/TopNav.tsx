import { Link, useLocation } from "wouter";
import { Home, Lightbulb, User, CheckSquare, Trophy, BookOpen, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: CheckSquare, label: "Tasks", href: "/dashboard/tasks" },
  { icon: Lightbulb, label: "Growth Ideas", href: "/dashboard/ideas" },
  { icon: Trophy, label: "Achievements", href: "/dashboard/achievements" },
  { icon: BookOpen, label: "Manifesto", href: "/dashboard/manifesto" },
  { icon: BarChart, label: "SaaS Metrics", href: "/dashboard/metrics" },
  { icon: User, label: "Profile", href: "/dashboard/profile" }
];

export default function TopNav() {
  const [location] = useLocation();

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-14 items-center px-6">
        <div className="mr-8">
          <Link href="/dashboard">
            <a className="text-lg font-semibold tracking-tight">Growthlog</a>
          </Link>
        </div>

        <nav className="flex gap-1 flex-1">
          {navItems.map(({ icon: Icon, label, href }) => {
            const isActive = location === href;
            return (
              <Link key={href} href={href}>
                <a className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors cursor-pointer",
                  isActive 
                    ? "text-primary bg-secondary" 
                    : "text-muted-foreground hover:text-foreground"
                )}>
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}