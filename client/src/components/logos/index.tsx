
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function BestWritingLogo({ className }: LogoProps) {
  return (
    <img 
      src="/bestwriting.png" 
      alt="BestWriting" 
      className={cn("h-7 w-auto opacity-60 hover:opacity-80 transition-opacity", className)}
    />
  );
}

export function CraftledLogo({ className }: LogoProps) {
  return (
    <img 
      src="/craftled.png" 
      alt="Craftled" 
      className={cn("h-5 w-auto opacity-60 hover:opacity-80 transition-opacity", className)}
    />
  );
}

export function MarketfulLogo({ className }: LogoProps) {
  return (
    <img 
      src="/marketful.png" 
      alt="Marketful" 
      className={cn("h-6 w-auto opacity-60 hover:opacity-80 transition-opacity", className)}
    />
  );
}

export function UiThingsLogo({ className }: LogoProps) {
  return (
    <img 
      src="/uithings.png" 
      alt="UI Things" 
      className={cn("h-6 w-auto opacity-60 hover:opacity-80 transition-opacity", className)}
    />
  );
}
