import GrowthCalendar from "@/components/dashboard/GrowthCalendar";
import ProgressStats from "@/components/dashboard/ProgressStats";
import GrowthLog from "@/components/dashboard/GrowthLog";
import ProfileSidebar from "@/components/dashboard/ProfileSidebar";

export default function Dashboard() {
  return (
    <div className="flex gap-6">
      <ProfileSidebar />
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Growth Activity</h1>
          <p className="text-sm text-muted-foreground">Track your progress and get personalized insights</p>
        </div>

        <ProgressStats />
        <GrowthLog />
        <GrowthCalendar />
      </div>
    </div>
  );
}