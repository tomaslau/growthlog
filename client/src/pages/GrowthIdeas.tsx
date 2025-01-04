import { Button } from "@/components/ui/button";
import IdeaCard from "@/components/growth/IdeaCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ideas = [
  {
    id: 1,
    title: "Cloneable Templates",
    description: "Improve acquisition & activation with a template library",
    icon: "📑",
    category: "Product"
  },
  {
    id: 2, 
    title: "Co-Marketing Campaigns",
    description: "Partner with complementary businesses to increase reach",
    icon: "🤝",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Cold Calling 2.0",
    description: "Prospect new accounts without Cold Calling",
    icon: "📞",
    category: "Sales"
  },
  {
    id: 4,
    title: "Community-Led Growth",
    description: "Build and nurture an engaged user community",
    icon: "👥",
    category: "Community"
  },
  {
    id: 5,
    title: "SEO Content Strategy",
    description: "Create content that ranks and converts",
    icon: "📈",
    category: "Marketing"
  },
  {
    id: 6,
    title: "Viral Loops",
    description: "Design features that encourage user sharing",
    icon: "🔄",
    category: "Product"
  },
  {
    id: 7,
    title: "Email Automation",
    description: "Set up behavior-triggered email sequences",
    icon: "✉️",
    category: "Marketing"
  },
  {
    id: 8,
    title: "Referral Program",
    description: "Implement user referral rewards system",
    icon: "🎁",
    category: "Sales"
  },
  {
    id: 9,
    title: "Product Analytics",
    description: "Track key metrics and user behavior",
    icon: "📊",
    category: "Analytics"
  }
];

export default function GrowthIdeas() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Growth Ideas</h1>
          <p className="text-muted-foreground">Find and track growth experiments</p>
        </div>
        <Button>Add New Idea</Button>
      </div>

      <div className="flex items-center gap-4 bg-muted/50 p-4 rounded-lg">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search growth ideas..." 
          className="max-w-sm bg-transparent border-none focus-visible:ring-0 px-0"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas.map(idea => (
          <IdeaCard key={idea.id} {...idea} />
        ))}
      </div>
    </div>
  );
}