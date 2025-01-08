import { useAuth } from "@/hooks/use-auth";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { GrowthCalendar } from "@/components/dashboard/GrowthCalendar";
import { ProgressStats } from "@/components/dashboard/ProgressStats";
import GrowthLog from "@/components/dashboard/GrowthLog";
import { ProfileSidebar } from "@/components/dashboard/ProfileSidebar";
import { TopNav } from "@/components/layout/TopNav";

export default function Dashboard() {
  const { user } = useAuth();
  const userId = user?.id || 1; // Fallback for development

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <div className="container mx-auto max-w-[1200px] px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <ProfileSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <DashboardHeader userId={userId} />

            <div className="space-y-6">
              <ProgressStats />
              <GrowthLog />
              <GrowthCalendar />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}