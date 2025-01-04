import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useLocation } from "wouter";

const ideas = [
  {
    id: 1,
    title: "Cold Email Campaign",
    description: "Launch targeted cold email campaign for SaaS decision makers",
    icon: "📧",
    category: "Acquisition",
    difficulty: "Medium",
    impact: "High",
    suggestedTasks: [
      "Research and create ICP list (25min)",
      "Draft initial email template (25min)",
      "Set up email tracking system (25min)",
      "Create follow-up sequence (25min)"
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
    suggestedTasks: [
      "Research top 3 competitor blogs (25min)",
      "Create content calendar (25min)",
      "Write first article outline (25min)",
      "Set up analytics tracking (25min)"
    ]
  },
  {
    id: 3,
    title: "Feature Adoption Campaign",
    description: "Increase adoption of key premium features",
    icon: "🚀",
    category: "Activation",
    difficulty: "Medium",
    impact: "High",
    suggestedTasks: [
      "Analyze current feature usage (25min)",
      "Create in-app tooltips (25min)",
      "Write onboarding email (25min)",
      "Set up A/B test (25min)"
    ]
  },
];

const categories = ["All", "Acquisition", "Activation", "Retention", "Revenue"];

export default function GrowthIdeas() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortField, setSortField] = useState<"title" | "category" | "difficulty" | "impact">("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const filteredIdeas = ideas
    .filter(idea => 
      (selectedCategory === "All" || idea.category === selectedCategory) &&
      (idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       idea.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      const direction = sortDirection === "asc" ? 1 : -1;
      return a[sortField] > b[sortField] ? direction : -direction;
    });

  const handleSort = (field: typeof sortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Growth Ideas</h1>
          <p className="text-muted-foreground">
            Proven growth tactics for SaaS companies, broken down into 25-minute tasks
          </p>
        </div>
        <Button>Add New Idea</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ideas..." 
            className="bg-transparent border-none focus-visible:ring-0 px-0"
          />
        </div>
        <div className="flex gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">Icon</TableHead>
              <TableHead>
                <button 
                  onClick={() => handleSort("title")}
                  className="flex items-center hover:text-accent-foreground text-sm"
                >
                  Title
                  <ArrowUpDown className="ml-2 h-3 w-3" />
                </button>
              </TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Impact</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIdeas.map(idea => (
              <TableRow key={idea.id} className="text-sm">
                <TableCell className="text-base">{idea.icon}</TableCell>
                <TableCell className="font-medium">{idea.title}</TableCell>
                <TableCell className="text-muted-foreground hidden md:table-cell">
                  <div>
                    <p>{idea.description}</p>
                    <div className="mt-2 text-xs">
                      <p className="font-medium text-foreground">Suggested tasks:</p>
                      <ul className="list-disc list-inside mt-1">
                        {idea.suggestedTasks?.slice(0, 2).map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                        {idea.suggestedTasks?.length > 2 && (
                          <li>+ {idea.suggestedTasks.length - 2} more tasks</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">{idea.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">{idea.difficulty}</Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={idea.impact === "High" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {idea.impact}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setLocation(`/ideas/${idea.id}`)}
                    className="text-xs h-7 px-2"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}