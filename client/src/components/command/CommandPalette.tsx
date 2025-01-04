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

type Action = {
  id: string;
  name: string;
  shortcut: string[];
  icon: any;
  href?: string;
  action?: () => void;
};

type Group = {
  name: string;
  actions: Action[];
};

const groups: Group[] = [
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
        action: () => {
          // Will implement task creation later
          console.log("Create task");
        },
      },
      {
        id: "new-idea",
        name: "Add Growth Idea",
        shortcut: ["c", "i"],
        icon: Lightbulb,
        action: () => {
          // Will implement idea creation later
          console.log("Add idea");
        },
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
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (action: Action) => {
    if (action.href) {
      setLocation(action.href);
    } else if (action.action) {
      action.action();
    }
    setOpen(false);
  };

  return (
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
                {action.shortcut && (
                  <CommandShortcut>
                    {action.shortcut.map((key) => (
                      <kbd
                        key={key}
                        className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 inline-flex ml-1"
                      >
                        {key}
                      </kbd>
                    ))}
                  </CommandShortcut>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}