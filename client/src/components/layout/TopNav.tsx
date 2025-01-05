import { Link, useLocation } from "wouter";
import { Home, Lightbulb, User, CheckSquare, Trophy, BookOpen, BarChart, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks" },
  { icon: Lightbulb, label: "Growth Ideas", href: "/ideas" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: BookOpen, label: "Process", href: "/process" },
  { icon: BarChart, label: "SaaS Metrics", href: "/metrics" },
];

export default function TopNav() {
  const [location] = useLocation();
  const { user, isLoading, loginWithGoogle, logout } = useAuth();

  // Hide navigation on marketing pages
  const marketingRoutes = ["/", "/features", "/process", "/updates", "/pricing"];
  if (marketingRoutes.includes(location)) {
    return null;
  }

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex h-14 items-center px-6">
        <div className="mr-8">
          <Link href="/">
            <h1 className="text-lg font-semibold tracking-tight cursor-pointer">Growthlog</h1>
          </Link>
        </div>

        <nav className="flex gap-1 flex-1">
          {navItems.map(({ icon: Icon, label, href }) => {
            const isActive = location === href;
            return (
              <Link key={href} href={href}>
                <div className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors cursor-pointer",
                  isActive 
                    ? "text-primary bg-secondary" 
                    : "text-muted-foreground hover:text-foreground"
                )}>
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {isLoading ? (
            <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.profilePicture || ''} alt={user.displayName || ''} />
                    <AvatarFallback>{user.displayName?.charAt(0) || 'U'}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={loginWithGoogle} variant="secondary" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
              Sign in with Google
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}