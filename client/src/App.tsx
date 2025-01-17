import { Switch, Route, useLocation } from "wouter";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import GrowthIdeaView from "@/pages/GrowthIdeaView";
import Profile from "@/pages/Profile";
import Process from "@/pages/Process";
import SharedDashboard from "@/pages/SharedDashboard";
import Pricing from "@/pages/Pricing";
import Updates from "@/pages/Updates";
import Features from "./pages/Features";
import GrowthSprints from "@/pages/features/GrowthSprints";
import ProgressTracking from "@/pages/features/ProgressTracking";
import Framework from "@/pages/features/Framework";
import Library from "@/pages/features/Library";
import SaasMetrics from "@/pages/features/SaasMetrics";
import Tasks from "@/pages/Tasks";
import GrowthIdeas from "@/pages/GrowthIdeas";
import Achievements from "@/pages/features/Achievements";
import { CommandPalette } from "@/components/command/CommandPalette";
import { PomodoroProvider } from "@/contexts/PomodoroContext";
import FloatingTimer from "@/components/pomodoro/FloatingTimer";
import { ThemeProvider } from "@/hooks/use-theme.tsx";
import { Footer } from "@/components/layout/Footer";

function App() {
  const [location] = useLocation();

  // Marketing pages where we don't want to show the in-app footer
  const marketingRoutes = [
    "/", 
    "/features", 
    "/process", 
    "/updates", 
    "/pricing", 
    "/features/growth-sprints",
    "/features/progress-tracking", 
    "/features/framework", 
    "/features/library",
    "/features/achievements",
    "/features/saas-metrics"
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="growthlog-theme">
      <PomodoroProvider>
        <div className="min-h-screen bg-background flex flex-col">
          <CommandPalette />
          <FloatingTimer />
          <main className="flex-1">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/tasks" component={Tasks} />
              <Route path="/ideas" component={GrowthIdeas} />
              <Route path="/ideas/:id" component={GrowthIdeaView} />
              <Route path="/profile" component={Profile} />
              <Route path="/process" component={Process} />
              <Route path="/share/:token" component={SharedDashboard} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/updates" component={Updates} />
              <Route path="/features" component={Features} />
              <Route path="/features/growth-sprints" component={GrowthSprints} />
              <Route path="/features/progress-tracking" component={ProgressTracking} />
              <Route path="/features/framework" component={Framework} />
              <Route path="/features/library" component={Library} />
              <Route path="/features/achievements" component={Achievements} />
              <Route path="/features/saas-metrics" component={SaasMetrics} />
            </Switch>
          </main>
          {!marketingRoutes.includes(location) && <Footer />}
        </div>
      </PomodoroProvider>
    </ThemeProvider>
  );
}

export default App;