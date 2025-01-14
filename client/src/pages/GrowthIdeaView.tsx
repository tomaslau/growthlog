
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Target, TrendingUp, CheckSquare, Book, Link as LinkIcon, Lightbulb, Clock } from "lucide-react";
import { growthIdeas, GrowthIdea, getGrowthIdea } from "@/data/growthIdeas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GrowthIdeaView() {
  const { id } = useParams();
  const idea = id ? getGrowthIdea(id) : undefined;

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

  const totalTime = idea.tasks.reduce((acc, task) => acc + task.duration, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/ideas">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Ideas
            </Button>
          </Link>
          <Badge variant="outline">{idea.category}</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save for Later</Button>
          <Button>
            <CheckSquare className="h-4 w-4 mr-2" />
            Start Growth Sprint
          </Button>
        </div>
      </div>

      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{idea.title}</h1>
        <p className="text-lg text-muted-foreground">{idea.description}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              <Clock className="h-4 w-4" />
              <h3 className="font-medium">Time Investment</h3>
            </div>
            <Badge variant="outline">
              {totalTime} minutes total
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <CheckSquare className="h-4 w-4" />
              <h3 className="font-medium">Tasks</h3>
            </div>
            <Badge variant="outline">
              {idea.tasks.length} pomodoros
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Implementation Overview</h3>
              <p className="text-muted-foreground">
                This growth initiative focuses on {idea.description.toLowerCase()} through a series of 
                focused tasks. Each task is designed to take 25 minutes, following the Pomodoro technique.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Implementation Steps</h3>
              <div className="space-y-6">
                {idea.tasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{task.title}</h4>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{task.duration} min</Badge>
                        <Badge variant="outline">1 pomodoro</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Key Metrics to Track</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {idea.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">{metric}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
              <div className="space-y-4">
                {idea.source && (
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                    <a href={idea.source} target="_blank" rel="noopener noreferrer" 
                       className="text-primary hover:underline">
                      Original Source
                    </a>
                  </div>
                )}
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date(idea.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
