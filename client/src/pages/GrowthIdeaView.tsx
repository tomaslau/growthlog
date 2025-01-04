import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Target, TrendingUp, CheckSquare } from "lucide-react";

// Using the same ideas array from GrowthIdeas.tsx
// In a real app, this would come from an API
const ideas = [
  {
    id: 1,
    title: "Cold Email Campaign",
    description: "Launch targeted cold email campaign for SaaS decision makers",
    icon: "📧",
    category: "Acquisition",
    difficulty: "Medium",
    impact: "High",
    tasks: [
      {
        title: "Research and create ICP list",
        description: "Define ideal customer profile and create initial prospect list",
        duration: 25
      },
      {
        title: "Draft initial email template",
        description: "Write and test initial email template variation",
        duration: 25
      },
      {
        title: "Set up email tracking system",
        description: "Configure tracking pixels and link monitoring",
        duration: 25
      },
      {
        title: "Create follow-up sequence",
        description: "Design multi-touch follow-up campaign",
        duration: 25
      }
    ],
    metrics: [
      "Email Open Rate",
      "Click-Through Rate",
      "Meeting Booking Rate",
      "Customer Acquisition Cost (CAC)"
    ]
  },
  {
    id: 2, 
    title: "Product-Led Blog Strategy",
    description: "Create high-impact blog content showcasing product solutions",
    icon: "✍️",
    category: "Acquisition",
    difficulty: "Medium",
    impact: "High",
    tasks: [
      {
        title: "Research competitor blogs",
        description: "Analyze top 3 competitor blog strategies",
        duration: 25
      },
      {
        title: "Create content calendar",
        description: "Plan next month's product-led content",
        duration: 25
      },
      {
        title: "Write first article outline",
        description: "Structure initial product use-case article",
        duration: 25
      },
      {
        title: "Set up analytics tracking",
        description: "Configure content conversion tracking",
        duration: 25
      }
    ],
    metrics: [
      "Organic Traffic Growth",
      "Time on Page",
      "Product Sign-up Rate",
      "Content ROI"
    ]
  }
];

export default function GrowthIdeaView() {
  const { id } = useParams();
  const idea = ideas.find(i => i.id === Number(id));

  if (!idea) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Growth idea not found</h2>
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
              <h3 className="font-medium">Time Investment</h3>
            </div>
            <Badge variant="outline">
              {idea.tasks.length * 25} minutes total
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Pomodoro Tasks (25 min each)</h3>
            <div className="space-y-4">
              {idea.tasks?.map((task, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {task.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {task.duration} min
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        1 point
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-4">Key SaaS Metrics to Track</h3>
            <div className="space-y-3">
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
        <Button>
          <CheckSquare className="h-4 w-4 mr-2" />
          Add Tasks to Board
        </Button>
      </div>
    </div>
  );
}