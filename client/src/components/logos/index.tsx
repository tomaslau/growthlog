import { cn } from "@/lib/utils";
import bestwritingLogo from "../../assets/bestwriting.png";
import craftledLogo from "../../assets/craftled.png";
import uithingsLogo from "../../assets/uithings.png";

interface LogoProps {
  className?: string;
}

// Common logo style for consistency - smaller and more subtle
const logoStyles = "h-5 w-auto object-contain opacity-50 hover:opacity-70 transition-opacity";

export function BestWritingLogo({ className }: LogoProps) {
  return (
    <img 
      src={bestwritingLogo} 
      alt="BestWriting" 
      className={cn(logoStyles, className)}
    />
  );
}

export function CraftledLogo({ className }: LogoProps) {
  return (
    <img 
      src={craftledLogo} 
      alt="Craftled" 
      className={cn(logoStyles, className)}
    />
  );
}

export function MarketfulLogo({ className }: LogoProps) {
  return (
    <img 
      src="/marketful.png"
      alt="Marketful" 
      className={cn(logoStyles, className)}
      style={{ maxHeight: "1.25rem" }}
    />
  );
}

export function UiThingsLogo({ className }: LogoProps) {
  return (
    <img 
      src={uithingsLogo} 
      alt="UI Things" 
      className={cn(logoStyles, className)}
    />
  );
}

export function PynionsLogo({ className }: LogoProps) {
  return (
    <img 
      src="/pynions.png"
      alt="Pynions" 
      className={cn(logoStyles, className)}
      style={{ maxHeight: "1.25rem" }}
    />
  );
}