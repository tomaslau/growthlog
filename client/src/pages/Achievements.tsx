import AchievementGrid from "@/components/achievements/AchievementGrid";

export default function Achievements() {
  // TODO: Get actual user ID from auth context
  const userId = 1; // Mock user ID for now

  return (
    <div className="container max-w-6xl mx-auto">
      <AchievementGrid userId={userId} />
    </div>
  );
}
