import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ProgressStats() {
  const stats = [
    { label: "Growth Tasks This Month", value: "10 tasks", progress: 33 },
    { label: "Growth Streak", value: "4 days", progress: 40 },
    { label: "Missed Days", value: "1/6 days", progress: 16 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map(({ label, value, progress }) => (
        <Card key={label}>
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">{label}</h3>
            <div className="text-2xl font-bold mb-4">{value}</div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}