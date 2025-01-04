import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw } from "lucide-react";

const SPRINT_DURATION = 25 * 60; // 25 minutes in seconds

export function Timer() {
  const [timeLeft, setTimeLeft] = useState(SPRINT_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((SPRINT_DURATION - timeLeft) / SPRINT_DURATION) * 100;
  
  const toggleTimer = () => setIsRunning(!isRunning);
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(SPRINT_DURATION);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div 
        className="flex flex-col items-center gap-8 p-8 rounded-lg bg-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div 
            className="text-6xl font-bold tracking-tight mb-2"
            key={timeLeft}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </motion.div>
          <div className="text-sm text-muted-foreground">
            Growth Sprint Timer
          </div>
        </div>

        <Progress value={progress} className="w-full h-2" />
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={resetTimer}
            disabled={isRunning}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          
          <Button
            variant="default"
            size="lg"
            onClick={toggleTimer}
            className="w-32"
          >
            {isRunning ? (
              <Pause className="h-4 w-4 mr-2" />
            ) : (
              <Play className="h-4 w-4 mr-2" />
            )}
            {isRunning ? "Pause" : "Start"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
