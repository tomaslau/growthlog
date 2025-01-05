import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import GrowthIdeas from "@/pages/GrowthIdeas";
import GrowthIdeaView from "@/pages/GrowthIdeaView";
import Profile from "@/pages/Profile";
import Achievements from "@/pages/Achievements";
import Process from "@/pages/Process";
import SaasMetrics from "@/pages/SaasMetrics";
import SharedDashboard from "@/pages/SharedDashboard";
import Pricing from "@/pages/Pricing";
import Updates from "@/pages/Updates";
import Features from "./pages/Features";
import GrowthSprints from "@/pages/features/GrowthSprints";
import ProgressTracking from "@/pages/features/ProgressTracking";
import Framework from "@/pages/features/Framework";
import GrowthIdeas from "@/pages/features/GrowthIdeas";
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
          <main>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/tasks" component={TaskBoard} />
              <Route path="/ideas" component={GrowthIdeas} />
              <Route path="/ideas/:id" component={GrowthIdeaView} />
              <Route path="/profile" component={Profile} />
              <Route path="/achievements" component={Achievements} />
              <Route path="/process" component={Process} />
              <Route path="/metrics" component={SaasMetrics} />
              <Route path="/share/:token" component={SharedDashboard} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/updates" component={Updates} />
              <Route path="/features" component={Features} />
              <Route path="/features/growth-sprints" component={GrowthSprints} />
              <Route path="/features/progress-tracking" component={ProgressTracking} />
              <Route path="/features/framework" component={Framework} />
              <Route path="/features/growth-ideas" component={GrowthIdeas} />
            </Switch>
          </main>
        </div>
      </PomodoroProvider>
    </ThemeProvider>
  );
}

export default App;