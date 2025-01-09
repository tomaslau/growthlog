import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowUpDown, Loader2 } from "lucide-react";
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
import { useQuery } from "@tanstack/react-query";
import { TopNav } from "@/components/layout/TopNav";

interface GrowthIdea {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  impact: string;
  icon: string;
  createdAt: string;
}

const categories = ["All", "Acquisition", "Activation", "Retention", "Revenue"];

export default function GrowthIdeas() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortField, setSortField] = useState<keyof GrowthIdea>("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const { data: ideas = [], isLoading, error } = useQuery<GrowthIdea[]>({
    queryKey: ["/api/growth-ideas"],
  });

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

  const handleSort = (field: keyof GrowthIdea) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <div className="p-8 text-center">
          <p className="text-red-500">Error loading growth ideas</p>
          <Button
            variant="outline"
            onClick={() => window.location.reload()}
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      <div className="mx-auto max-w-[1200px] p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Growth Ideas</h1>
            <p className="text-muted-foreground">
              Browse and manage your collection of growth tactics
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
                <TableHead>
                  <button 
                    onClick={() => handleSort("category")}
                    className="flex items-center hover:text-accent-foreground text-sm"
                  >
                    Category
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead>
                  <button 
                    onClick={() => handleSort("difficulty")}
                    className="flex items-center hover:text-accent-foreground text-sm"
                  >
                    Difficulty
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead>
                  <button 
                    onClick={() => handleSort("impact")}
                    className="flex items-center hover:text-accent-foreground text-sm"
                  >
                    Impact
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </button>
                </TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-48">
                    <div className="flex items-center justify-center">
                      <Loader2 className="h-6 w-6 animate-spin" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredIdeas.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-48 text-center">
                    <p className="text-muted-foreground">No growth ideas found</p>
                  </TableCell>
                </TableRow>
              ) : (
                filteredIdeas.map(idea => (
                  <TableRow key={idea.id} className="text-sm">
                    <TableCell className="text-base">{idea.icon}</TableCell>
                    <TableCell className="font-medium">{idea.title}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">
                      {idea.description}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {idea.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {idea.difficulty}
                      </Badge>
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
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}