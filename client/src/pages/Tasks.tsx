import { useAuth } from "@/hooks/use-auth";
import { TopNav } from "@/components/layout/TopNav";
import TaskBoard from "@/components/tasks/TaskBoard";

export default function Tasks() {
  const { user } = useAuth();
  const userId = user?.id || 1; // Fallback for development

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <div className="container mx-auto max-w-[1200px] px-4 py-6">
        <main className="min-w-0">
          <TaskBoard />
        </main>
      </div>
    </div>
  );
}