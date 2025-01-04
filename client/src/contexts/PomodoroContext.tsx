import { createContext, useContext, useState, useEffect } from "react";

type ActiveTimer = {
  taskId: number;
  taskTitle: string;
  timeLeft: number;
  isRunning: boolean;
} | null;

type PomodoroContextType = {
  activeTimer: ActiveTimer;
  setActiveTimer: (timer: ActiveTimer) => void;
  toggleTimer: () => void;
  resetTimer: () => void;
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  const [activeTimer, setActiveTimer] = useState<ActiveTimer>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (activeTimer && activeTimer.isRunning && activeTimer.timeLeft > 0) {
      interval = setInterval(() => {
        setActiveTimer(prev => {
          if (!prev) return null;
          const newTimeLeft = prev.timeLeft - 1;
          return newTimeLeft <= 0 
            ? null 
            : { ...prev, timeLeft: newTimeLeft };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [activeTimer?.isRunning]);

  const toggleTimer = () => {
    setActiveTimer(prev => 
      prev ? { ...prev, isRunning: !prev.isRunning } : null
    );
  };

  const resetTimer = () => {
    setActiveTimer(null);
  };

  return (
    <PomodoroContext.Provider value={{ activeTimer, setActiveTimer, toggleTimer, resetTimer }}>
      {children}
    </PomodoroContext.Provider>
  );
}

export function usePomodoroTimer() {
  const context = useContext(PomodoroContext);
  if (context === undefined) {
    throw new Error("usePomodoroTimer must be used within a PomodoroProvider");
  }
  return context;
}