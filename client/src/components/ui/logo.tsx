
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg 
      width="18" 
      height="18" 
      viewBox="0 0 101 76" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M25.0107 0.0918007L0 25.1025L25.0976 50.2001L50.1081 75.2109L100.129 25.1896L75.1187 0.178971L50.1083 25.1894L25.0107 0.0918007Z" 
        fill="currentColor"
      />
    </svg>
  );
}
