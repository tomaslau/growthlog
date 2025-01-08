import { cn } from "@/lib/utils";
import bestwritingLogo from "../../assets/bestwriting.png";
import craftledLogo from "../../assets/craftled.png";
import marketfulLogo from "../../assets/marketful.png";
import uithingsLogo from "../../assets/uithings.png";

interface LogoProps {
  className?: string;
}

export function BestWritingLogo({ className }: LogoProps) {
  return (
    <img 
      src={bestwritingLogo} 
      alt="BestWriting" 
      className={cn("h-6 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity", className)}
    />
  );
}

export function CraftledLogo({ className }: LogoProps) {
  return (
    <img 
      src={craftledLogo} 
      alt="Craftled" 
      className={cn("h-5 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity", className)}
    />
  );
}

export function MarketfulLogo({ className }: LogoProps) {
  return (
    <img 
      src={marketfulLogo} 
      alt="Marketful" 
      className={cn("h-5 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity max-h-[20px] px-1", className)}
    />
  );
}

export function UiThingsLogo({ className }: LogoProps) {
  return (
    <img 
      src={uithingsLogo} 
      alt="UI Things" 
      className={cn("h-5 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity", className)}
    />
  );
}