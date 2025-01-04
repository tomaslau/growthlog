import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface IdeaCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function IdeaCard({ title, description, icon }: IdeaCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View Tactic</Button>
      </CardFooter>
    </Card>
  );
}
