import GrowthCalendar from "@/components/dashboard/GrowthCalendar";
import ProgressStats from "@/components/dashboard/ProgressStats";
import GrowthLog from "@/components/dashboard/GrowthLog";
import ProfileSidebar from "@/components/dashboard/ProfileSidebar";
import ProfileVisibilityToggle from "@/components/dashboard/ProfileVisibilityToggle";

export default function Dashboard() {
  // TODO: Get actual user ID from auth context
  const userId = 1; // Mock user ID for now

  return (
    <div className="flex gap-6">
      <ProfileSidebar />
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-1">Growth Activity</h1>
            <p className="text-sm text-muted-foreground">Track your progress and get personalized insights</p>
          </div>
          <ProfileVisibilityToggle userId={userId} />
        </div>

        <ProgressStats />
        <GrowthLog />
        <GrowthCalendar />
      </div>
    </div>
  );
}