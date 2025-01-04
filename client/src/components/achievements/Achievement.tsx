import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trophy, Share2 } from "lucide-react";

interface AchievementProps {
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
  requiredPoints: number;
  isLocked?: boolean;
}

export default function Achievement({ 
  name, 
  description, 
  icon, 
  unlockedAt,
  requiredPoints,
  isLocked 
}: AchievementProps) {
  const [shareOpen, setShareOpen] = useState(false);
  
  const shareAchievement = async () => {
    try {
      await navigator.share({
        title: `I earned the ${name} achievement on Growthlog!`,
        text: description,
        url: window.location.href
      });
    } catch (err) {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(
        `I earned the ${name} achievement on Growthlog! ${window.location.href}`
      );
    }
  };

  return (
    <Dialog open={shareOpen} onOpenChange={setShareOpen}>
      <DialogTrigger asChild>
        <div 
          className={`
            relative group cursor-pointer rounded-lg border p-4 
            ${isLocked ? 'opacity-50 grayscale' : 'hover:border-primary/50'}
          `}
        >
          <div className="flex items-start gap-4">
            <div className="text-3xl">{icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold leading-none">{name}</h3>
                {!isLocked && (
                  <Badge variant="outline" className="shrink-0">
                    {requiredPoints} pts
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
              {unlockedAt && (
                <p className="text-xs text-muted-foreground mt-2">
                  Earned {new Date(unlockedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          {!isLocked && (
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Achievement</DialogTitle>
          <DialogDescription>
            Share your achievement with your network!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="text-6xl mb-2">{icon}</div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-center text-muted-foreground">{description}</p>
          <Button onClick={shareAchievement} className="w-full">
            <Share2 className="h-4 w-4 mr-2" />
            Share Achievement
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
