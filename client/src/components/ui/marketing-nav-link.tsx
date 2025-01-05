
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarketingNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function MarketingNavLink({ href, children, className }: MarketingNavLinkProps) {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link href={href}>
      <motion.span
        className={cn(
          "relative cursor-pointer text-[13px] font-medium text-muted-foreground/80 transition-colors hover:text-foreground",
          isActive && "text-foreground font-semibold",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary"
          initial={false}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </motion.span>
    </Link>
  );
}
