import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, CheckCircle2, Clock, ArrowRight } from "lucide-react";

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

const columns: { id: TaskStatus; title: string; icon: any }[] = [
  { id: "today", title: "Today", icon: Clock },
  { id: "later", title: "Later", icon: Calendar },
  { id: "completed", title: "Completed", icon: CheckCircle2 },
];

export default function TaskBoard() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map(column => (
          <div key={column.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <column.icon className="h-5 w-5 text-muted-foreground" />
                <h2 className="font-semibold">{column.title}</h2>
              </div>
              <Badge variant="secondary">
                {tasks.filter(t => t.status === column.id).length}
              </Badge>
            </div>

            <div className="space-y-4">
              {tasks
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
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
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
