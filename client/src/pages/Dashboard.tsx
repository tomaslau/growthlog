import ActivityCalendar from "@/components/dashboard/ActivityCalendar";
import ProgressStats from "@/components/dashboard/ProgressStats";
import ActivityLog from "@/components/dashboard/ActivityLog";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Your Progress</h1>
        <p className="text-sm text-muted-foreground">Track your growth marketing activities</p>
      </div>

      <ProgressStats />
      <ActivityCalendar />
      <ActivityLog />
    </div>
  );
}