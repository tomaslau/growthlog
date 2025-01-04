import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Calendar, CheckCircle2, Clock, ArrowRight, Search, ArrowUpDown } from "lucide-react";
import PomodoroTimer from "./PomodoroTimer";
import { useState } from "react";
import { useConfetti } from "@/hooks/useConfetti";

// Mock data - will be replaced with API data
const tasks = [
  {
    id: 1,
    title: "Research competitor pricing",
    description: "Analyze top 5 competitors' pricing models",
    points: 100,
    dueTime: "2pm",
    status: "today"
  },
  {
    id: 2, 
    title: "Create social media calendar",
    description: "Plan next week's content",
    points: 150,
    dueTime: "4pm",
    status: "today"
  },
  {
    id: 3,
    title: "Review analytics dashboard",
    description: "Check key metrics and create report",
    points: 80,
    status: "later"
  },
];

type TaskStatus = "today" | "later" | "completed";
type SortField = "title" | "points" | "dueTime";
type SortOrder = "asc" | "desc";

const columns: { id: TaskStatus; title: string; icon: any }[] = [
  { id: "today", title: "Today", icon: Clock },
  { id: "later", title: "Later", icon: Calendar },
  { id: "completed", title: "Completed", icon: CheckCircle2 },
];

export default function TaskBoard() {
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [taskStates, setTaskStates] = useState(tasks);
  const { fireConfetti } = useConfetti();

  // Filtering state
  const [searchQuery, setSearchQuery] = useState("");
  const [minPoints, setMinPoints] = useState<number>(0);
  const [sortField, setSortField] = useState<SortField>("title");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleCompleteTask = (taskId: number) => {
    setTaskStates(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, status: "completed" as TaskStatus }
          : task
      )
    );

    fireConfetti({
      primary: ['#10b981', '#34d399', '#6ee7b7'],
      secondary: ['#047857', '#059669', '#10b981']
    });
  };

  const filteredAndSortedTasks = taskStates
    .filter(task => {
      const matchesSearch = 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPoints = task.points >= minPoints;
      return matchesSearch && matchesPoints;
    })
    .sort((a, b) => {
      const direction = sortOrder === "asc" ? 1 : -1;
      if (sortField === "points") {
        return (a.points - b.points) * direction;
      }
      if (sortField === "dueTime") {
        if (!a.dueTime) return 1;
        if (!b.dueTime) return -1;
        return a.dueTime.localeCompare(b.dueTime) * direction;
      }
      return a.title.localeCompare(b.title) * direction;
    });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-1">Task Board</h1>
          <p className="text-muted-foreground">Organize and track your growth tasks</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex items-center gap-4">
        <div className="flex-1 flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..." 
            className="bg-transparent border-none focus-visible:ring-0 px-0"
          />
        </div>

        <div className="flex gap-2 items-center">
          <Input
            type="number"
            placeholder="Min points"
            className="w-28"
            value={minPoints}
            onChange={(e) => setMinPoints(Number(e.target.value))}
          />

          <Select
            value={sortField}
            onValueChange={(value) => setSortField(value as SortField)}
          >
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="points">Points</SelectItem>
              <SelectItem value="dueTime">Due Time</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setSortOrder(order => order === "asc" ? "desc" : "asc")}
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {activeTaskId && (
        <div className="max-w-sm mx-auto">
          <PomodoroTimer 
            taskId={activeTaskId}
            taskTitle={taskStates.find(t => t.id === activeTaskId)?.title || "Task"}
            onComplete={() => {
              console.log("Pomodoro completed for task:", activeTaskId);
              setActiveTaskId(null);
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <column.icon className="h-5 w-5 text-muted-foreground" />
                <h2 className="font-semibold">{column.title}</h2>
              </div>
              <Badge variant="secondary">
                {filteredAndSortedTasks.filter(t => t.status === column.id).length}
              </Badge>
            </div>

            <div className="space-y-4">
              {filteredAndSortedTasks
                .filter(task => task.status === column.id)
                .map(task => (
                  <Card key={task.id} className="group">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="font-medium">{task.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {task.description}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          {task.status === "today" && (
                            <>
                              <Button
                                variant="outline"
                                size="icon"
                                className={`${activeTaskId === task.id ? 'text-primary' : ''}`}
                                onClick={() => setActiveTaskId(activeTaskId === task.id ? null : task.id)}
                              >
                                <Clock className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handleCompleteTask(task.id)}
                              >
                                <CheckCircle2 className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <Badge variant="secondary" className="text-xs">
                          {task.points} pts
                        </Badge>
                        {task.dueTime && (
                          <span className="text-xs text-muted-foreground">
                            Due {task.dueTime}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}