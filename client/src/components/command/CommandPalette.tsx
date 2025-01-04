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
} from "lucide-react";
import { Command } from "cmdk";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const groups = [
  {
    name: "Suggestions",
    actions: [
      {
        id: "home",
        name: "Go to Dashboard",
        shortcut: ["g", "h"],
        icon: Home,
        href: "/",
      },
      {
        id: "ideas",
        name: "Browse Growth Ideas",
        shortcut: ["g", "i"],
        icon: Lightbulb,
        href: "/ideas",
      },
      {
        id: "profile",
        name: "View Profile",
        shortcut: ["g", "p"],
        icon: User,
        href: "/profile",
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
        icon: Calendar,
      },
      {
        id: "new-idea",
        name: "Add Growth Idea",
        shortcut: ["c", "i"],
        icon: Lightbulb,
      },
    ],
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Command
        className="fixed inset-x-0 top-20 z-50 max-w-2xl mx-auto rounded-lg border bg-popover shadow-md"
        loop
      >
        <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <Command.Input
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Type a command or search..."
          />
        </div>
        <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          {groups.map((group) => (
            <Command.Group key={group.name} heading={group.name} className="px-2 py-2">
              {group.actions.map((action) => (
                <Command.Item
                  key={action.id}
                  onSelect={() => {
                    if (action.href) {
                      setLocation(action.href);
                    }
                    setOpen(false);
                  }}
                  className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent"
                >
                  <action.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{action.name}</span>
                  {action.shortcut && (
                    <span className="ml-auto flex items-center gap-1">
                      {action.shortcut.map((key) => (
                        <kbd
                          key={key}
                          className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 inline-flex ml-1"
                        >
                          {key}
                        </kbd>
                      ))}
                    </span>
                  )}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command>
    </Dialog>
  );
}
