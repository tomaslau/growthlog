import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

// Common logo style for consistency - smaller and more subtle
const logoStyles =
  "h-5 w-auto object-contain opacity-50 hover:opacity-70 transition-opacity";

export function BestWritingLogo({ className }: LogoProps) {
  return (
    <img
      src="/assets/bestwriting.png"
      alt="BestWriting"
      className={cn(logoStyles, className)}
    />
  );
}

export function CraftledLogo({ className }: LogoProps) {
  return (
    <img
      src="/assets/craftled.png"
      alt="Craftled"
      className={cn(logoStyles, className)}
    />
  );
}

export function MarketfulLogo({ className }: LogoProps) {
  return (
    <img
      src="/assets/marketful.png"
      alt="Marketful"
      className={cn(logoStyles, className)}
    />
  );
}

export function UiThingsLogo({ className }: LogoProps) {
  return (
    <img
      src="/assets/uithings.png"
      alt="UI Things"
      className={cn(logoStyles, className)}
    />
  );
}

export function PynionsLogo({ className }: LogoProps) {
  return (
    <img
      src="/assets/pynions.png"
      alt="Pynions"
      className={cn(logoStyles, className)}
    />
  );
}
