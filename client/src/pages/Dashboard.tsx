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
          <h1 className="text-2xl font-bold mb-1">Your Progress</h1>
          <p className="text-sm text-muted-foreground">Track your daily growth tasks and build momentum</p>
        </div>

        <ProgressStats />
        <GrowthCalendar />
        <GrowthLog />
      </div>
    </div>
  );
}