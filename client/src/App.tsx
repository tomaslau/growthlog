import { Switch, Route } from "wouter";
import Dashboard from "@/pages/Dashboard";
import GrowthIdeas from "@/pages/GrowthIdeas";
import GrowthIdeaView from "@/pages/GrowthIdeaView";
import Profile from "@/pages/Profile";
import TopNav from "@/components/layout/TopNav";
import { CommandPalette } from "@/components/command/CommandPalette";
import { TourProvider } from "@/components/tour/TourProvider";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function WelcomeDialog({ onStartTour }: { onStartTour: () => void }) {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Growthlog</DialogTitle>
          <DialogDescription>
            Track your growth journey, manage experiments, and build consistent habits with our intelligent tracking system.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Skip Tour
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              onStartTour();
            }}
          >
            Start Tour
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [tourStarted, setTourStarted] = useState(false);

  useEffect(() => {
    // In a real app, we'd check if this is the first visit
    const isFirstVisit = !localStorage.getItem("hasVisited");
    if (isFirstVisit) {
      setShowWelcome(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <TourProvider>
      <div className="min-h-screen bg-background">
        <TopNav />
        <CommandPalette />
        <main className="p-6">
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/ideas" component={GrowthIdeas} />
            <Route path="/ideas/:id" component={GrowthIdeaView} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </main>
        {showWelcome && !tourStarted && (
          <WelcomeDialog
            onStartTour={() => {
              setTourStarted(true);
              setShowWelcome(false);
            }}
          />
        )}
      </div>
    </TourProvider>
  );
}

export default App;