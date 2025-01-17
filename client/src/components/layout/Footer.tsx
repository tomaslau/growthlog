import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { Logo } from "@/components/ui/logo";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-border dark:border-zinc-800 bg-background", className)}>
      <div className="max-w-[1200px] mx-auto">
        {/* Main navigation */}
        <div className="flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Logo className="h-4 w-4" />
            <span className="text-[13px] font-semibold tracking-tight text-foreground">
              Growthlog
            </span>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/help" className="hover:text-foreground transition-colors">Help</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/legal" className="hover:text-foreground transition-colors">Legal</Link>
            </nav>
            <div className="h-4 w-px bg-border dark:bg-zinc-800"></div>
            <a 
              href="https://github.com/growthlog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright and attribution */}
        <div className="border-t border-border dark:border-zinc-800">
          <div className="flex h-14 items-center justify-between px-6 text-sm text-zinc-400 dark:text-zinc-500">
            <div>
              2025 © Growthlog - Build marketing momentum. Standing on the shoulders of giants.
            </div>
            <div className="flex items-center gap-2">
              Built by{" "}
              <a 
                href="https://craftled.com" 
                className="inline-flex items-center text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 154 154" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="shrink-0 dark:invert"
                >
                  <rect width="154" height="154" rx="77" fill="#0A0A0A"></rect>
                  <path d="M77.8 106.2C71.9667 106.2 66.85 105.033 62.45 102.7C58.05 100.333 54.6333 97.05 52.2 92.85C49.8 88.65 48.6 83.8 48.6 78.3C48.6 72.7333 49.8 67.9167 52.2 63.85C54.6333 59.75 58.05 56.5667 62.45 54.3C66.85 52.0333 71.9667 50.9 77.8 50.9C82.1667 50.9 86.0333 51.55 89.4 52.85C92.7667 54.1167 95.5833 55.8 97.85 57.9C100.117 60 101.833 62.3 103 64.8C104.167 67.3 104.75 69.7833 104.75 72.25C104.75 72.2833 104.75 72.35 104.75 72.45C104.75 72.5167 104.75 72.5833 104.75 72.65H89.4C89.4 72.45 89.3833 72.2667 89.35 72.1C89.35 71.9 89.3167 71.7 89.25 71.5C88.9833 70.1 88.4 68.7833 87.5 67.55C86.6 66.3167 85.3333 65.3167 83.7 64.55C82.1 63.75 80.1 63.35 77.7 63.35C75.1333 63.35 72.8333 63.9167 70.8 65.05C68.8 66.1833 67.2167 67.8667 66.05 70.1C64.8833 72.3 64.3 75.0333 64.3 78.3C64.3 81.5 64.8833 84.2667 66.05 86.6C67.2167 88.9 68.8 90.6667 70.8 91.9C72.8333 93.1333 75.1333 93.75 77.7 93.75C80.3333 93.75 82.4833 93.35 84.15 92.55C85.8167 91.7167 87.0667 90.6167 87.9 89.25C88.7333 87.85 89.2333 86.3167 89.4 84.65H104.75C104.75 87.1167 104.167 89.6333 103 92.2C101.867 94.7333 100.167 97.05 97.9 99.15C95.6667 101.25 92.8667 102.95 89.5 104.25C86.1333 105.55 82.2333 106.2 77.8 106.2Z" fill="white"></path>
                </svg>
                <span className="ml-1">Craftled</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}