import ActivityCalendar from "@/components/dashboard/ActivityCalendar";
import ProgressStats from "@/components/dashboard/ProgressStats";
import ActivityLog from "@/components/dashboard/ActivityLog";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Your Progress</h1>
        <p className="text-muted-foreground">Track your growth marketing activities</p>
      </div>

      <ProgressStats />
      <ActivityCalendar />
      <ActivityLog />
    </div>
  );
}
