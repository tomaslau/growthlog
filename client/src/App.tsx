import { Switch, Route } from "wouter";
import Dashboard from "@/pages/Dashboard";
import GrowthIdeas from "@/pages/GrowthIdeas";
import GrowthIdeaView from "@/pages/GrowthIdeaView";
import Profile from "@/pages/Profile";
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
        <div className="min-h-screen bg-gradient">
          <TopNav />
          <CommandPalette />
          <FloatingTimer />
          <main className="px-6 py-6 md:py-8">
            <div className="max-w-[1500px] mx-auto">
              <Switch>
                <Route path="/" component={Dashboard} />
                <Route path="/tasks" component={TaskBoard} />
                <Route path="/ideas" component={GrowthIdeas} />
                <Route path="/ideas/:id" component={GrowthIdeaView} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </main>
        </div>
      </PomodoroProvider>
    </ThemeProvider>
  );
}

export default App;