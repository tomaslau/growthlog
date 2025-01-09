import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/logo";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex h-14 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-4 w-4" />
              <span className="text-[13px] font-semibold tracking-tight text-foreground">
                Growthlog
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <nav className="flex gap-4">
              <Link href="/legal" className="hover:text-foreground transition-colors">Legal</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/help" className="hover:text-foreground transition-colors">Help</Link>
            </nav>
            <div className="h-4 w-px bg-border"></div>
            <div className="flex items-center gap-3">
              <a 
                href="https://twitter.com/growthlog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com/growthlog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/company/growthlog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}