import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw } from "lucide-react";
import { usePomodoroTimer } from "@/contexts/PomodoroContext";

interface PomodoroTimerProps {
  onComplete?: () => void;
  taskId: number;
  taskTitle: string;
}

export default function PomodoroTimer({ onComplete, taskId, taskTitle }: PomodoroTimerProps) {
  const totalTime = 25 * 60; // 25 minutes in seconds
  const { activeTimer, setActiveTimer, toggleTimer, resetTimer } = usePomodoroTimer();
  const [progress, setProgress] = useState(0);

  // Initialize timer if this task becomes active
  useEffect(() => {
    if (!activeTimer && taskId) {
      setActiveTimer({
        taskId,
        taskTitle,
        timeLeft: totalTime,
        isRunning: false
      });
    }
  }, [taskId, taskTitle, setActiveTimer]);

  // Update progress and handle completion
  useEffect(() => {
    if (activeTimer && activeTimer.taskId === taskId) {
      const newProgress = ((totalTime - activeTimer.timeLeft) / totalTime) * 100;
      setProgress(newProgress);

      if (activeTimer.timeLeft === 0) {
        onComplete?.();
      }
    }
  }, [activeTimer, taskId, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isActive = activeTimer?.taskId === taskId;
  const timeLeft = isActive ? activeTimer.timeLeft : totalTime;
  const isRunning = isActive && activeTimer.isRunning;

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-mono mb-2">{formatTime(timeLeft)}</div>
            <Progress value={progress} className="w-full h-2" />
          </div>

          <div className="flex justify-center gap-2">
            <Button
              variant={isRunning ? "outline" : "default"}
              size="icon"
              onClick={toggleTimer}
            >
              {isRunning ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={resetTimer}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}