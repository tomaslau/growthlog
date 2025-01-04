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
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const { setActiveTimer } = usePomodoroTimer();

  const totalTime = 25 * 60; // 25 minutes in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      // Update global timer state
      setActiveTimer({ taskId, taskTitle, timeLeft });

      interval = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          setProgress(((totalTime - newTime) / totalTime) * 100);
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setActiveTimer(null);
      onComplete?.();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete, taskId, taskTitle, setActiveTimer]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setActiveTimer({ taskId, taskTitle, timeLeft });
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(totalTime);
    setProgress(0);
    setActiveTimer(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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