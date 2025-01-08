import { Link, useLocation } from "wouter";
import { Home, Lightbulb, User, CheckSquare, Trophy, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks" },
  { icon: Lightbulb, label: "Growth Ideas", href: "/ideas" },
  { icon: Trophy, label: "Achievements", href: "/achievements" },
  { icon: BarChart3, label: "SaaS Metrics", href: "/metrics" },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <h2 className="text-[13px] font-medium px-2">Navigation</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map(({ icon: Icon, label, href }) => (
            <SidebarMenuItem key={href}>
              <SidebarMenuButton
                asChild
                isActive={location === href}
                tooltip={label}
              >
                <Link href={href} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
