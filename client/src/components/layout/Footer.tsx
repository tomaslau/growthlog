import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-sm font-medium">Growthlog</span>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/status" className="hover:text-foreground transition-colors">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              All systems normal
            </span>
          </Link>
          <div className="h-4 w-px bg-border"></div>
          <nav className="flex gap-4">
            <Link href="/legal" className="hover:text-foreground transition-colors">Legal</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link href="/help" className="hover:text-foreground transition-colors">Help</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
