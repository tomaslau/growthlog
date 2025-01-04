import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowUpDown, Filter } from "lucide-react";
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

const ideas = [
  {
    id: 1,
    title: "Cloneable Templates",
    description: "Improve acquisition & activation with a template library",
    icon: "📑",
    category: "Product",
    difficulty: "Medium",
    impact: "High"
  },
  {
    id: 2, 
    title: "Co-Marketing Campaigns",
    description: "Partner with complementary businesses to increase reach",
    icon: "🤝",
    category: "Marketing",
    difficulty: "High",
    impact: "High"
  },
  {
    id: 3,
    title: "Cold Calling 2.0",
    description: "Prospect new accounts without Cold Calling",
    icon: "📞",
    category: "Sales",
    difficulty: "Medium",
    impact: "Medium"
  },
  {
    id: 4,
    title: "Community-Led Growth",
    description: "Build and nurture an engaged user community",
    icon: "👥",
    category: "Community",
    difficulty: "High",
    impact: "High"
  },
  {
    id: 5,
    title: "SEO Content Strategy",
    description: "Create content that ranks and converts",
    icon: "📈",
    category: "Marketing",
    difficulty: "Medium",
    impact: "High"
  },
  {
    id: 6,
    title: "Viral Loops",
    description: "Design features that encourage user sharing",
    icon: "🔄",
    category: "Product",
    difficulty: "High",
    impact: "High"
  },
  {
    id: 7,
    title: "Email Automation",
    description: "Set up behavior-triggered email sequences",
    icon: "✉️",
    category: "Marketing",
    difficulty: "Medium",
    impact: "High"
  },
  {
    id: 8,
    title: "Referral Program",
    description: "Implement user referral rewards system",
    icon: "🎁",
    category: "Sales",
    difficulty: "Medium",
    impact: "High"
  },
  {
    id: 9,
    title: "Product Analytics",
    description: "Track key metrics and user behavior",
    icon: "📊",
    category: "Analytics",
    difficulty: "High",
    impact: "High"
  }
];

const categories = ["All", "Product", "Marketing", "Sales", "Community", "Analytics"];

export default function GrowthIdeas() {
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
          <p className="text-muted-foreground">Find and track growth experiments</p>
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
              <TableHead className="w-[50px]">Icon</TableHead>
              <TableHead>
                <button 
                  onClick={() => handleSort("title")}
                  className="flex items-center hover:text-accent-foreground"
                >
                  Title
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead>
                <button 
                  onClick={() => handleSort("category")}
                  className="flex items-center hover:text-accent-foreground"
                >
                  Category
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead>
                <button 
                  onClick={() => handleSort("difficulty")}
                  className="flex items-center hover:text-accent-foreground"
                >
                  Difficulty
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead>
                <button 
                  onClick={() => handleSort("impact")}
                  className="flex items-center hover:text-accent-foreground"
                >
                  Impact
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIdeas.map(idea => (
              <TableRow key={idea.id}>
                <TableCell className="font-medium text-xl">{idea.icon}</TableCell>
                <TableCell className="font-medium">{idea.title}</TableCell>
                <TableCell className="text-muted-foreground">{idea.description}</TableCell>
                <TableCell>
                  <Badge variant="outline">{idea.category}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{idea.difficulty}</Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={idea.impact === "High" ? "default" : "secondary"}
                  >
                    {idea.impact}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}