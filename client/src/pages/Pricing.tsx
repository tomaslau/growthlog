import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[1200px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Powerful Features,<br />Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Transform your growth initiatives into actionable wins with our comprehensive SaaS growth platform and straightforward annual pricing.
            </p>
          </div>

          <div className="max-w-5xl mx-auto p-6 rounded-lg bg-card/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Growth Platform</h3>
                  <p className="text-muted-foreground">
                    A complete toolkit for sustainable SaaS growth. Break down complex initiatives into focused 25-minute sprints and track your progress effectively.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">What's included</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      25-minute growth sprints
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Progress tracking dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Growth framework access
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Task management system
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Achievement tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Metrics visualization
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold">$100</h3>
                    <p className="text-sm text-muted-foreground">per year</p>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full">
                      Get access
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Invoices and receipts available for easy company reimbursement
                    </p>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Growth ideas library
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Collaborative workspaces
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Real-time analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Export functionality
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Priority support
                    </li>
                    <li className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Regular updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
