import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Timer, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePomodoroTimer } from "@/contexts/PomodoroContext";
import { useLocation } from "wouter";

export default function FloatingTimer() {
  const { activeTimer, setActiveTimer } = usePomodoroTimer();
  const [location] = useLocation();

  // Only show if we have an active timer and we're not on the tasks page
  if (!activeTimer || location === "/tasks") return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="fixed bottom-4 right-4 p-4 shadow-lg flex items-center gap-3 z-50 animate-in slide-in-from-bottom-4">
      <Timer className="h-4 w-4 text-primary" />
      <div className="flex-1">
        <div className="text-sm font-medium">{activeTimer.taskTitle}</div>
        <div className="text-lg font-mono">{formatTime(activeTimer.timeLeft)}</div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => setActiveTimer(null)}
      >
        <X className="h-4 w-4" />
      </Button>
    </Card>
  );
}
