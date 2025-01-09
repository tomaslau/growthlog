import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Lightbulb,
  Home,
  Search,
  Keyboard,
  BookOpen,
  Plus,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useNavigationShortcuts, formatShortcut } from "@/hooks/useKeyboardShortcuts";
import { Priority, priorities } from "@/components/tasks/TaskBoard";

// Task creation form data
type TaskFormData = {
  title: string;
  description: string;
  priority: Priority;
  status: "today" | "later";
};

const defaultTaskFormData: TaskFormData = {
  title: "",
  description: "",
  priority: "medium",
  status: "today",
};

type Action = {
  id: string;
  name: string;
  shortcut?: string[];
  icon: any;
  href?: string;
  action?: () => void;
  keyboardShortcut?: {
    key: string;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
  };
};

type Group = {
  name: string;
  actions: Action[];
};

const groups: Group[] = [
  {
    name: "Navigation",
    actions: [
      {
        id: "home",
        name: "Go to Dashboard",
        icon: Home,
        href: "/",
        keyboardShortcut: { key: "h", ctrlKey: true },
      },
      {
        id: "ideas",
        name: "Browse Growth Ideas",
        icon: Lightbulb,
        href: "/ideas",
        keyboardShortcut: { key: "i", ctrlKey: true },
      },
      {
        id: "process",
        name: "View Process",
        icon: BookOpen,
        href: "/process",
        keyboardShortcut: { key: "p", ctrlKey: true },
      },
    ],
  },
  {
    name: "Quick Actions",
    actions: [
      {
        id: "new-task",
        name: "Create Growth Task",
        shortcut: ["c", "t"],
        icon: Plus,
        action: () => {} // Will be set in the component
      },
      {
        id: "shortcuts",
        name: "View Keyboard Shortcuts",
        icon: Keyboard,
        shortcut: ["?"],
        action: () => {
          console.log("Show shortcuts");
        },
      },
    ],
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [taskDialogOpen, setTaskDialogOpen] = useState(false);
  const [, setLocation] = useLocation();
  const form = useForm<TaskFormData>({ defaultValues: defaultTaskFormData });

  // Enable navigation shortcuts
  useNavigationShortcuts();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "?") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onSubmit = (data: TaskFormData) => {
    if (window.addTask) {
      window.addTask({
        ...data,
        sourceIdeaTitle: "Manual Entry"
      });
    }
    setTaskDialogOpen(false);
    form.reset(defaultTaskFormData);
  };

  // Update the new task action
  groups[1].actions[0].action = () => {
    setOpen(false);
    setTaskDialogOpen(true);
  };

  const runCommand = (action: Action) => {
    if (action.href) {
      setLocation(action.href);
    } else if (action.action) {
      action.action();
    }
    setOpen(false);
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group) => (
            <CommandGroup key={group.name} heading={group.name}>
              {group.actions.map((action) => (
                <CommandItem
                  key={action.id}
                  onSelect={() => runCommand(action)}
                >
                  <action.icon className="mr-2 h-4 w-4" />
                  {action.name}
                  {(action.shortcut || action.keyboardShortcut) && (
                    <CommandShortcut>
                      {action.shortcut?.map((key) => (
                        <kbd
                          key={key}
                          className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 inline-flex ml-1"
                        >
                          {key}
                        </kbd>
                      ))}
                      {action.keyboardShortcut && (
                        <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 inline-flex ml-1">
                          {formatShortcut({
                            ...action.keyboardShortcut,
                            action: () => {},
                            description: "",
                          })}
                        </kbd>
                      )}
                    </CommandShortcut>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>

      <Dialog open={taskDialogOpen} onOpenChange={setTaskDialogOpen}>
        <DialogContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
              <DialogDescription>
                Add a new growth task to your board
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Input
                  placeholder="Task title"
                  {...form.register("title", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Task description (optional)"
                  {...form.register("description")}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Select
                    onValueChange={(value) => form.setValue("priority", value as Priority)}
                    defaultValue={form.getValues("priority")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem key={priority.value} value={priority.value}>
                          {priority.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Select
                    onValueChange={(value) => form.setValue("status", value as "today" | "later")}
                    defaultValue={form.getValues("status")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="later">Later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setTaskDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Create Task</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}