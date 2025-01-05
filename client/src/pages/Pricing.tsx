import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { MarketingNavLink } from "@/components/ui/marketing-nav-link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useAuth } from "@/hooks/use-auth";
import { MarketingTopNav } from "@/components/layout/MarketingTopNav";
import { MarketingFooter } from "@/components/layout/MarketingFooter"; // Import MarketingFooter

const PricingItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-2">
    <Check className="h-4 w-4 text-primary" />
    {children}
  </li>
);

export default function Pricing() {
  const { user, isLoading, loginWithGoogle, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <MarketingTopNav />

      <main className="max-w-[1200px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Choose the plan that fits your growth journey. No monthly options - we believe in long-term commitment to growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pro Plan */}
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pro Plan</h3>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold">$50</h3>
                    <p className="text-sm text-muted-foreground">per year</p>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Perfect for founders and individual marketers
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full">
                    Start Growing Now
                  </Button>
                </div>

                <ul className="space-y-3 text-sm">
                  <PricingItem>Full access to growth ideas library</PricingItem>
                  <PricingItem>25-minute sprint framework</PricingItem>
                  <PricingItem>Personal progress tracking</PricingItem>
                  <PricingItem>SaaS metrics dashboard</PricingItem>
                  <PricingItem>Achievement system</PricingItem>
                  <PricingItem>Email support</PricingItem>
                  <PricingItem>Google Sheets integration</PricingItem>
                  <PricingItem>Regular updates</PricingItem>
                </ul>
              </div>
            </Card>

            {/* Business Plan */}
            <Card className="p-8 border-primary">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Plan</h3>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold">$500</h3>
                    <p className="text-sm text-muted-foreground">per year</p>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    For teams serious about growth
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full">
                    Scale Your Team
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Everything in Pro, plus organization-wide features:
                  </p>
                </div>

                <ul className="space-y-3 text-sm">
                  <PricingItem>Unlimited team members</PricingItem>
                  <PricingItem>Organization-wide progress tracking</PricingItem>
                  <PricingItem>Organization-wide analytics dashboard</PricingItem>
                  <PricingItem>Shared growth library</PricingItem>
                  <PricingItem>Cross-team performance insights</PricingItem>
                  <PricingItem>Team leaderboards</PricingItem>
                  <PricingItem>Priority email support</PricingItem>
                  <PricingItem>SSO with Google Workspace</PricingItem>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        <MarketingFooter /> {/* Replaced the entire footer section */}
      </main>
    </div>
  );
}