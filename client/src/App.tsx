import { Switch, Route } from "wouter";
import Dashboard from "@/pages/Dashboard";
import GrowthIdeas from "@/pages/GrowthIdeas";
import Profile from "@/pages/Profile";
import Sidebar from "@/components/layout/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8">
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/ideas" component={GrowthIdeas} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
