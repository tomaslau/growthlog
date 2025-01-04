import { Button } from "@/components/ui/button";
import IdeaCard from "@/components/growth/IdeaCard";

const ideas = [
  {
    id: 1,
    title: "Cloneable Templates",
    description: "Improve acquisition & activation with a template library",
    icon: "📑"
  },
  {
    id: 2, 
    title: "Co-Marketing Campaigns",
    description: "Partner with complementary businesses to increase reach",
    icon: "🤝"
  },
  {
    id: 3,
    title: "Cold Calling 2.0",
    description: "Prospect new accounts without Cold Calling",
    icon: "📞"
  }
];

export default function GrowthIdeas() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Growth Ideas</h1>
          <p className="text-muted-foreground">Find and track growth experiments</p>
        </div>
        <Button>Add New Idea</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ideas.map(idea => (
          <IdeaCard key={idea.id} {...idea} />
        ))}
      </div>
    </div>
  );
}
