import GrowthCalendar from "@/components/dashboard/GrowthCalendar";
import ProgressStats from "@/components/dashboard/ProgressStats";
import GrowthLog from "@/components/dashboard/GrowthLog";
import ProfileVisibilityToggle from "@/components/dashboard/ProfileVisibilityToggle";
import { AppTopNav } from "@/components/layout/AppTopNav";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export default function Dashboard() {
  // TODO: Get actual user ID from auth context
  const userId = 1; // Mock user ID for now

  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen bg-background">
        <AppTopNav />

        <div className="flex">
          <AppSidebar />

          <SidebarInset>
            <div className="max-w-[1200px] mx-auto px-6 py-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                <div>
                  <h1 className="text-xl font-semibold tracking-tight mb-1">Growth Activity</h1>
                  <p className="text-[13px] text-muted-foreground">Track your progress and get personalized insights</p>
                </div>
                <ProfileVisibilityToggle userId={userId} />
              </div>

              <div className="space-y-4">
                <ProgressStats />
                <GrowthLog />
                <GrowthCalendar />
              </div>
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}