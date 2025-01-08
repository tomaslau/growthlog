import GrowthCalendar from "@/components/dashboard/GrowthCalendar";
import ProgressStats from "@/components/dashboard/ProgressStats";
import GrowthLog from "@/components/dashboard/GrowthLog";
import ProfileSidebar from "@/components/dashboard/ProfileSidebar";
import ProfileVisibilityToggle from "@/components/dashboard/ProfileVisibilityToggle";

export default function Dashboard() {
  // TODO: Get actual user ID from auth context
  const userId = 1; // Mock user ID for now

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64">
            <ProfileSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Growth Activity</h1>
                <p className="text-sm text-muted-foreground">Track your progress and get personalized insights</p>
              </div>
              <ProfileVisibilityToggle userId={userId} />
            </div>

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