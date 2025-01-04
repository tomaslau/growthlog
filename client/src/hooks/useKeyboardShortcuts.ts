import { useEffect } from "react";
import { useLocation } from "wouter";

type Shortcut = {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  action: () => void;
  description: string;
};

const isApple = typeof window !== "undefined" && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

export function formatShortcut(shortcut: Shortcut): string {
  const parts: string[] = [];
  if (shortcut.ctrlKey || shortcut.metaKey) parts.push(isApple ? "⌘" : "Ctrl");
  if (shortcut.altKey) parts.push(isApple ? "⌥" : "Alt");
  if (shortcut.shiftKey) parts.push("⇧");
  parts.push(shortcut.key.toUpperCase());
  return parts.join("+");
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Don't trigger shortcuts when typing in input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const matchingShortcut = shortcuts.find(
        (shortcut) =>
          shortcut.key.toLowerCase() === event.key.toLowerCase() &&
          !!shortcut.ctrlKey === (event.ctrlKey || event.metaKey) &&
          !!shortcut.altKey === event.altKey &&
          !!shortcut.shiftKey === event.shiftKey
      );

      if (matchingShortcut) {
        event.preventDefault();
        matchingShortcut.action();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);
}

export function useNavigationShortcuts() {
  const [, setLocation] = useLocation();

  return useKeyboardShortcuts([
    {
      key: "h",
      ctrlKey: true,
      description: "Go to Dashboard",
      action: () => setLocation("/"),
    },
    {
      key: "i",
      ctrlKey: true,
      description: "Go to Growth Ideas",
      action: () => setLocation("/ideas"),
    },
    {
      key: "p",
      ctrlKey: true,
      description: "Go to Profile",
      action: () => setLocation("/profile"),
    },
  ]);
}
