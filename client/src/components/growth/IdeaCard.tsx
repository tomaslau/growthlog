import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface IdeaCardProps {
  title: string;
  description: string;
  icon: string;
  category: string;
}

export default function IdeaCard({ title, description, icon, category }: IdeaCardProps) {
  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold leading-none">{title}</h3>
              <Badge variant="outline" className="shrink-0">
                {category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <Button variant="outline" size="sm" className="w-full">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}