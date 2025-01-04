import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Target, TrendingUp, Users } from "lucide-react";

// Using the same ideas array from GrowthIdeas.tsx
// In a real app, this would come from an API
const ideas = [
  {
    id: 1,
    title: "Cloneable Templates",
    description: "Improve acquisition & activation with a template library",
    icon: "📑",
    category: "Product",
    difficulty: "Medium",
    impact: "High",
    steps: [
      "Research competitor template offerings",
      "Define template categories and structure",
      "Create initial set of templates",
      "Set up template sharing infrastructure",
      "Launch template marketplace"
    ],
    metrics: [
      "Template adoption rate",
      "User activation rate",
      "Template conversion rate",
      "User retention impact"
    ]
  },
  // ... other ideas remain the same
];

export default function GrowthIdeaView() {
  const { id } = useParams();
  const idea = ideas.find(i => i.id === Number(id));

  if (!idea) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Idea not found</h2>
          <Link href="/ideas">
            <Button variant="outline">Back to Ideas</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/ideas">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Ideas
          </Button>
        </Link>
        <Badge variant="outline">{idea.category}</Badge>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-4xl">{idea.icon}</div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{idea.title}</h1>
          <p className="text-lg text-muted-foreground">{idea.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Target className="h-4 w-4" />
              <h3 className="font-medium">Difficulty</h3>
            </div>
            <Badge variant="secondary">{idea.difficulty}</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <TrendingUp className="h-4 w-4" />
              <h3 className="font-medium">Impact</h3>
            </div>
            <Badge variant={idea.impact === "High" ? "default" : "secondary"}>
              {idea.impact}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <h3 className="font-medium">Estimated Time</h3>
            </div>
            <Badge variant="outline">2-4 weeks</Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Implementation Steps</h3>
            <div className="space-y-2">
              {idea.steps?.map((step, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                    {index + 1}
                  </div>
                  <p className="flex-1 text-sm pt-1">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Key Metrics to Track</h3>
            <div className="space-y-2">
              {idea.metrics?.map((metric, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <p className="text-sm">{metric}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Save for Later</Button>
        <Button>Start Implementation</Button>
      </div>
    </div>
  );
}
