
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-8 max-w-[1200px]">
        <div className="grid grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Features</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/features/growth-sprints">Growth Sprints</Link></li>
              <li><Link href="/features/framework">Framework</Link></li>
              <li><Link href="/features/metrics">Metrics</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/updates">Updates</Link></li>
              <li><Link href="/status">Status</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground mt-12">
          <div>
            2025 © Growthlog - Standing on the shoulders of giants.
          </div>
          <div className="flex items-center gap-2">
            Built by{" "}
            <a href="https://craftled.com" className="inline-flex items-center hover:text-foreground">
              Craftled
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
