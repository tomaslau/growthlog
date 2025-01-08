import { Link, useLocation } from "wouter";
import { Home, Lightbulb, User, CheckSquare, Trophy, BookOpen, BarChart, LogOut, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
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
  const marketingRoutes = ["/", "/features", "/process", "/updates", "/pricing", "/features/growth-sprints", "/features/progress-tracking", "/features/framework", "/features/achievements"];
  if (marketingRoutes.includes(location)) {
    return null;
  }

  const handleEmailClick = () => {
    window.open('mailto:support@growthlog.app', '_blank');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex h-14 items-center px-6">
          <Link href="/" className="flex items-center gap-2 mr-8">
            <Logo className="h-4 w-4" />
            <span className="text-[13px] font-semibold tracking-tight text-foreground">
              Growthlog
            </span>
          </Link>

          <nav className="hidden md:flex gap-1 flex-1">
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

          <div className="flex items-center gap-3 ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleEmailClick}
              className="text-muted-foreground hover:text-foreground hidden md:flex"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span>Support</span>
            </Button>
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
                <DropdownMenuContent align="end" className="bg-popover">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => loginWithGoogle()} variant="secondary" size="sm" className="h-7 rounded px-3 text-[13px] font-medium">
                Sign in with Google
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}