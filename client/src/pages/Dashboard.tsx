import GrowthCalendar from "@/components/dashboard/GrowthCalendar";
import ProgressStats from "@/components/dashboard/ProgressStats";
import GrowthLog from "@/components/dashboard/GrowthLog";
import ProfileSidebar from "@/components/dashboard/ProfileSidebar";
import MomentumGraph from "@/components/dashboard/MomentumGraph";
import GrowthInsights from "@/components/dashboard/GrowthInsights";
import ActiveChallenges from "@/components/dashboard/ActiveChallenges";

export default function Dashboard() {
  return (
    <div className="flex gap-6">
      <ProfileSidebar />
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Your Growth Journey</h1>
          <p className="text-sm text-muted-foreground">Track your progress and get personalized insights</p>
        </div>

        <ProgressStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MomentumGraph />
          <GrowthInsights />
        </div>
        <ActiveChallenges />
        <GrowthCalendar />
        <GrowthLog />
      </div>
    </div>
  );
}