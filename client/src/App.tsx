import { Switch, Route } from "wouter";
import Dashboard from "@/pages/Dashboard";
import GrowthIdeas from "@/pages/GrowthIdeas";
import GrowthIdeaView from "@/pages/GrowthIdeaView";
import Profile from "@/pages/Profile";
import TaskBoard from "@/components/tasks/TaskBoard";
import TopNav from "@/components/layout/TopNav";
import { CommandPalette } from "@/components/command/CommandPalette";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <CommandPalette />
      <main className="p-6">
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/tasks" component={TaskBoard} />
          <Route path="/ideas" component={GrowthIdeas} />
          <Route path="/ideas/:id" component={GrowthIdeaView} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    </div>
  );
}

export default App;