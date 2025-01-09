import { useAuth } from "@/hooks/use-auth";
import { TopNav } from "@/components/layout/TopNav";
import { ProfileSidebar } from "@/components/dashboard/ProfileSidebar";
import TaskBoard from "@/components/tasks/TaskBoard";

export default function Tasks() {
  const { user } = useAuth();
  const userId = user?.id || 1; // Fallback for development

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <div className="container mx-auto max-w-[1200px] px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <ProfileSidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <TaskBoard />
          </main>
        </div>
      </div>
    </div>
  );
}
