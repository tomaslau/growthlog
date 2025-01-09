import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw } from "lucide-react";
import { usePomodoroTimer } from "@/contexts/PomodoroContext";
import { Badge } from "@/components/ui/badge";
import { MoodTracker } from "./MoodTracker";
import { useToast } from "@/hooks/use-toast";

interface PomodoroTimerProps {
  onComplete?: () => void;
  taskId: string;
  taskTitle: string;
  taskDescription?: string;
  sourceIdeaTitle?: string;
}

export default function PomodoroTimer({ 
  onComplete, 
  taskId, 
  taskTitle,
  taskDescription,
  sourceIdeaTitle
}: PomodoroTimerProps) {
  const totalTime = 25 * 60; // 25 minutes in seconds
  const { activeTimer, setActiveTimer, toggleTimer, resetTimer } = usePomodoroTimer();
  const [progress, setProgress] = useState(0);
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const { toast } = useToast();

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
        setShowMoodTracker(true);
      }
    }
  }, [activeTimer, taskId]);

  const handleMoodUpdate = async (mood: string, productivity: number, notes: string) => {
    try {
      const response = await fetch('/api/mood-entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskId,
          mood,
          productivity,
          notes
        })
      });

      if (!response.ok) throw new Error('Failed to save mood data');

      toast({
        title: "Success!",
        description: "Your mood and productivity data has been saved.",
      });

      setShowMoodTracker(false);
      onComplete?.();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save mood data. Please try again.",
        variant: "destructive",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isActive = activeTimer?.taskId === taskId;
  const timeLeft = isActive ? activeTimer.timeLeft : totalTime;
  const isRunning = isActive && activeTimer.isRunning;

  return (
    <div className="space-y-4">
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{taskTitle}</CardTitle>
          {taskDescription && (
            <CardDescription>{taskDescription}</CardDescription>
          )}
          {sourceIdeaTitle && (
            <Badge variant="outline" className="mt-2 text-xs">
              From: {sourceIdeaTitle}
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-mono mb-3 font-semibold">
                {formatTime(timeLeft)}
              </div>
              <Progress value={progress} className="w-full h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                {isRunning ? "Focus on your task" : "Ready to start?"}
              </p>
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

      {showMoodTracker && (
        <MoodTracker onMoodUpdate={handleMoodUpdate} />
      )}
    </div>
  );
}