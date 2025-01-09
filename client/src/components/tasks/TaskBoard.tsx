import { Card, CardContent } from "@/components/ui/card";
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
import { Plus, CheckCircle2, Clock, Search, ArrowUpDown, X } from "lucide-react";
import PomodoroTimer from "./PomodoroTimer";
import { useState, useCallback, useMemo } from "react";
import { useConfetti } from "@/hooks/useConfetti";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import debounce from "lodash/debounce";

// Mock data - will be replaced with API data
const initialTasks = [
  {
    id: "1",
    title: "Research competitor pricing",
    description: "Analyze top 5 competitors' pricing models",
    status: "today",
    sourceIdeaTitle: "Cloneable Templates"
  },
  {
    id: "2", 
    title: "Create social media calendar",
    description: "Plan next week's content",
    status: "today",
    sourceIdeaTitle: "SEO Content Strategy"
  },
  {
    id: "3",
    title: "Review analytics dashboard",
    description: "Check key metrics and create report",
    status: "later",
    sourceIdeaTitle: "Product Analytics"
  },
];

type TaskStatus = "today" | "later" | "completed";
type SortField = "title" | "source";
type SortOrder = "asc" | "desc";
type FilterCriteria = {
  search: string;
  status: TaskStatus | "all";
  source: string | "all";
};

const columns: { id: TaskStatus; title: string; icon: any }[] = [
  { id: "today", title: "Today", icon: Clock },
  { id: "later", title: "Later", icon: Clock },
  { id: "completed", title: "Completed", icon: CheckCircle2 },
];

export default function TaskBoard() {
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [tasks, setTasks] = useState(initialTasks);
  const { fireConfetti } = useConfetti();

  // Advanced filtering state
  const [filters, setFilters] = useState<FilterCriteria>({
    search: "",
    status: "all",
    source: "all"
  });
  const [sortField, setSortField] = useState<SortField>("title");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleCompleteTask = (taskId: string) => {
    setTasks(prev => 
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

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const updatedTasks = [...tasks];
    const task = updatedTasks.find(t => t.id === draggableId);
    if (!task) return;

    // Remove from source
    updatedTasks.splice(updatedTasks.findIndex(t => t.id === draggableId), 1);

    // Add to destination
    const insertIndex = updatedTasks.filter(t => t.status === destination.droppableId).length;
    task.status = destination.droppableId as TaskStatus;

    // If moving to completed, trigger confetti
    if (destination.droppableId === 'completed' && source.droppableId !== 'completed') {
      handleCompleteTask(task.id);
    }

    updatedTasks.splice(insertIndex, 0, task);
    setTasks(updatedTasks);
  };

  // Get unique sources for filter dropdown
  const sources = useMemo(() => {
    const uniqueSources = new Set(tasks.map(task => task.sourceIdeaTitle));
    return Array.from(uniqueSources);
  }, [tasks]);

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setFilters(prev => ({ ...prev, search: value }));
    }, 300),
    []
  );

  // Apply filters and sorting
  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        const matchesSearch = 
          filters.search === "" ||
          task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          task.description.toLowerCase().includes(filters.search.toLowerCase()) ||
          task.sourceIdeaTitle.toLowerCase().includes(filters.search.toLowerCase());

        const matchesStatus = filters.status === "all" || task.status === filters.status;
        const matchesSource = filters.source === "all" || task.sourceIdeaTitle === filters.source;

        return matchesSearch && matchesStatus && matchesSource;
      })
      .sort((a, b) => {
        const direction = sortOrder === "asc" ? 1 : -1;
        if (sortField === "title") {
          return a.title.localeCompare(b.title) * direction;
        } else {
          return a.sourceIdeaTitle.localeCompare(b.sourceIdeaTitle) * direction;
        }
      });
  }, [tasks, filters, sortField, sortOrder]);

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      search: "",
      status: "all",
      source: "all"
    });
  };

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

      {/* Smart Search and Filter Controls */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input 
              onChange={(e) => debouncedSearch(e.target.value)}
              placeholder="Search tasks by title, description, or source..." 
              className="bg-transparent border-none focus-visible:ring-0 px-0"
            />
          </div>

          <div className="flex gap-2 items-center">
            <Select
              value={filters.source}
              onValueChange={(value) => setFilters(prev => ({ ...prev, source: value }))}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                {sources.map(source => (
                  <SelectItem key={source} value={source}>{source}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={filters.status}
              onValueChange={(value) => setFilters(prev => ({ ...prev, status: value as TaskStatus | "all" }))}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {columns.map(column => (
                  <SelectItem key={column.id} value={column.id}>{column.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={sortField}
              onValueChange={(value) => setSortField(value as SortField)}
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="source">Source</SelectItem>
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

        {/* Active Filters Display */}
        {(filters.search || filters.status !== "all" || filters.source !== "all") && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {filters.search && (
              <Badge variant="secondary" className="text-xs">
                Search: {filters.search}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, search: "" }))}
                />
              </Badge>
            )}
            {filters.status !== "all" && (
              <Badge variant="secondary" className="text-xs">
                Status: {filters.status}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, status: "all" }))}
                />
              </Badge>
            )}
            {filters.source !== "all" && (
              <Badge variant="secondary" className="text-xs">
                Source: {filters.source}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => setFilters(prev => ({ ...prev, source: "all" }))}
                />
              </Badge>
            )}
            <Button variant="ghost" size="sm" onClick={resetFilters} className="h-6 px-2">
              Reset all
            </Button>
          </div>
        )}
      </div>

      {activeTaskId && (
        <div className="max-w-sm mx-auto">
          <PomodoroTimer 
            taskId={activeTaskId}
            taskTitle={tasks.find(t => t.id === activeTaskId)?.title || "Task"}
            onComplete={() => {
              setActiveTaskId(null);
            }}
          />
        </div>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(column => (
            <div key={column.id} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <column.icon className="h-5 w-5 text-muted-foreground" />
                  <h2 className="font-semibold">{column.title}</h2>
                </div>
                <Badge variant="secondary">
                  {filteredTasks.filter(t => t.status === column.id).length}
                </Badge>
              </div>

              <Droppable droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-4"
                  >
                    {filteredTasks
                      .filter(task => task.status === column.id)
                      .map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Card className="group hover:border-primary/50 transition-colors">
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
                                        <Button
                                          variant="outline"
                                          size="icon"
                                          className={`${activeTaskId === task.id ? 'text-primary' : ''}`}
                                          onClick={() => setActiveTaskId(activeTaskId === task.id ? null : task.id)}
                                        >
                                          <Clock className="h-4 w-4" />
                                        </Button>
                                      )}
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 mt-3">
                                    <Badge variant="outline" className="text-xs">
                                      From: {task.sourceIdeaTitle}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}