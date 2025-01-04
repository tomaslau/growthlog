import { createContext, useContext, useState } from "react";

type ActiveTimer = {
  taskId: number;
  taskTitle: string;
  timeLeft: number;
} | null;

type PomodoroContextType = {
  activeTimer: ActiveTimer;
  setActiveTimer: (timer: ActiveTimer) => void;
};

const PomodoroContext = createContext<PomodoroContextType | undefined>(undefined);

export function PomodoroProvider({ children }: { children: React.ReactNode }) {
  const [activeTimer, setActiveTimer] = useState<ActiveTimer>(null);

  return (
    <PomodoroContext.Provider value={{ activeTimer, setActiveTimer }}>
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
