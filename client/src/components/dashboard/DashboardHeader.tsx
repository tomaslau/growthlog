import { ProfileVisibilityToggle } from "./ProfileVisibilityToggle";

interface DashboardHeaderProps {
  userId: number;
}

export function DashboardHeader({ userId }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight mb-1">Growth Activity</h1>
        <p className="text-[13px] text-muted-foreground">Track your progress and get personalized insights</p>
      </div>
      <ProfileVisibilityToggle userId={userId} />
    </div>
  );
}
