import { Switch, Route } from "wouter";
import Dashboard from "@/pages/Dashboard";
import GrowthIdeas from "@/pages/GrowthIdeas";
import GrowthIdeaView from "@/pages/GrowthIdeaView";
import Profile from "@/pages/Profile";
import Achievements from "@/pages/Achievements";
import TaskBoard from "@/components/tasks/TaskBoard";
import TopNav from "@/components/layout/TopNav";
import { CommandPalette } from "@/components/command/CommandPalette";
import { PomodoroProvider } from "@/contexts/PomodoroContext";
import FloatingTimer from "@/components/pomodoro/FloatingTimer";
import { ThemeProvider } from "@/hooks/use-theme.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="growthlog-theme">
      <PomodoroProvider>
        <div className="min-h-screen bg-background">
          <TopNav />
          <CommandPalette />
          <FloatingTimer />
          <main className="p-6">
            <Switch>
              <Route path="/" component={Dashboard} />
              <Route path="/tasks" component={TaskBoard} />
              <Route path="/ideas" component={GrowthIdeas} />
              <Route path="/ideas/:id" component={GrowthIdeaView} />
              <Route path="/profile" component={Profile} />
              <Route path="/achievements" component={Achievements} />
            </Switch>
          </main>
        </div>
      </PomodoroProvider>
    </ThemeProvider>
  );
}

export default App;