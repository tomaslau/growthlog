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
import { useNavigationShortcuts, formatShortcut } from "@/hooks/useKeyboardShortcuts";

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
        icon: Calendar,
        action: () => {
          console.log("Create task");
        },
      },
      {
        id: "new-idea",
        name: "Add Growth Idea",
        shortcut: ["c", "i"],
        icon: Lightbulb,
        action: () => {
          console.log("Add idea");
        },
      },
      {
        id: "shortcuts",
        name: "View Keyboard Shortcuts",
        icon: Keyboard,
        shortcut: ["?"],
        action: () => {
          // Will implement shortcuts help dialog later
          console.log("Show shortcuts");
        },
      },
    ],
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [, setLocation] = useLocation();

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
  );
}