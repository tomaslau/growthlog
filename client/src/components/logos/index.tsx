import { cn } from "@/lib/utils";
import bestwritingLogo from "../../assets/bestwriting.png";
import craftledLogo from "../../assets/craftled.png";
import uithingsLogo from "../../assets/uithings.png";

interface LogoProps {
  className?: string;
}

// Common logo style for consistency - slightly bigger than before
const logoStyles = "h-8 w-auto object-contain opacity-60 hover:opacity-80 transition-opacity";

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
      className={cn(logoStyles, "px-2", className)}
      style={{ objectFit: "contain", maxHeight: "2rem" }}
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
      style={{ objectFit: "contain", maxHeight: "2rem" }}
    />
  );
}