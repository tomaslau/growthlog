import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

type Update = {
  date: string;
  title: string;
  description: string;
  tag: "New" | "Improved" | "Fixed";
};

const updates: { month: string; items: Update[] }[] = [
  {
    month: "January 2025",
    items: [
      {
        date: "Jan 5",
        title: "Organization-wide analytics dashboard",
        description: "Business plan users can now access comprehensive analytics across their entire organization, making it easier to track team performance and growth initiatives.",
        tag: "New"
      },
      {
        date: "Jan 3",
        title: "Enhanced progress tracking",
        description: "We've improved how we track and visualize your growth progress, making it easier to see your momentum over time.",
        tag: "Improved"
      },
      {
        date: "Jan 1",
        title: "Streamlined onboarding experience",
        description: "New users now get a guided tour of key features and quick setup tips to help them start their growth journey faster.",
        tag: "Improved"
      }
    ]
  },
  {
    month: "December 2024",
    items: [
      {
        date: "Dec 28",
        title: "Google Sheets Integration",
        description: "Export your growth data directly to Google Sheets for custom analysis and reporting.",
        tag: "New"
      },
      {
        date: "Dec 15",
        title: "Team Leaderboards",
        description: "Business plan users can now foster healthy competition with team leaderboards based on completed growth tasks and achievements.",
        tag: "New"
      },
      {
        date: "Dec 10",
        title: "Growth Ideas Library",
        description: "Access our curated collection of proven SaaS growth tactics, each broken down into actionable 25-minute tasks.",
        tag: "New"
      }
    ]
  }
];

export default function Updates() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-[800px] mx-auto px-6">
        <div className="pt-36 pb-24">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-6">
              <span>Product updates</span>
              <ChevronRight className="h-4 w-4" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Latest Updates</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with new features and improvements to help you grow your SaaS business more effectively.
            </p>
          </div>

          <div className="space-y-16">
            {updates.map((monthGroup) => (
              <div key={monthGroup.month} className="space-y-8">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {monthGroup.month}
                </h2>
                <div className="space-y-4">
                  {monthGroup.items.map((update, index) => (
                    <Card key={index} className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Badge variant={
                              update.tag === "New" ? "default" :
                              update.tag === "Improved" ? "secondary" : "destructive"
                            }>
                              {update.tag}
                            </Badge>
                            <h3 className="font-medium">{update.title}</h3>
                          </div>
                          <time className="text-sm text-muted-foreground">
                            {update.date}
                          </time>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {update.description}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
