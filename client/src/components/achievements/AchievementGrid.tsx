import { useQuery } from "@tanstack/react-query";
import Achievement from "./Achievement";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  requiredPoints: number;
}

interface UserAchievement {
  id: number;
  userId: number;
  achievementId: number;
  unlockedAt: string;
  achievement: Achievement;
}

export default function AchievementGrid({ userId }: { userId: number }) {
  // Fetch all achievements
  const { data: allAchievements } = useQuery<{ achievements: Achievement[] }>({
    queryKey: ["/api/achievements"],
  });

  // Fetch user's achievements
  const { data: userAchievements } = useQuery<{ achievements: UserAchievement[] }>({
    queryKey: [`/api/achievements/user/${userId}`],
  });

  if (!allAchievements) return null;

  // Create a map of unlocked achievements
  const unlockedMap = new Map(
    userAchievements?.achievements.map(ua => [ua.achievementId, ua.unlockedAt]) || []
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-1">Your Achievements</h2>
        <p className="text-muted-foreground">
          Track your growth journey through earned badges
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allAchievements.achievements.map((achievement) => {
          const unlockedAt = unlockedMap.get(achievement.id);
          return (
            <Achievement
              key={achievement.id}
              name={achievement.name}
              description={achievement.description}
              icon={achievement.icon}
              requiredPoints={achievement.requiredPoints}
              unlockedAt={unlockedAt ? new Date(unlockedAt) : undefined}
              isLocked={!unlockedAt}
            />
          );
        })}
      </div>
    </div>
  );
}
