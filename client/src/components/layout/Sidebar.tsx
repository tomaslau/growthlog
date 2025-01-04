import { Link, useLocation } from "wouter";
import { Home, Lightbulb, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Lightbulb, label: "Growth Ideas", href: "/ideas" },
  { icon: User, label: "Profile", href: "/profile" }
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="w-56 bg-sidebar p-4 border-r border-border">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-sidebar-foreground">Growth Tracker</h1>
      </div>

      <nav className="space-y-1">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link key={href} href={href}>
            <a className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
              location === href && "bg-sidebar-accent"
            )}>
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}