import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Smile, Meh, Frown, Zap, Brain, Battery, Coffee } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface MoodTrackerProps {
  onMoodUpdate?: (mood: string, productivity: number, notes: string) => void;
}

export function MoodTracker({ onMoodUpdate }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [productivity, setProductivity] = useState<number | null>(null);
  const [notes, setNotes] = useState("");

  const moods = [
    { icon: Zap, label: "Energized", color: "text-yellow-500" },
    { icon: Brain, label: "Focused", color: "text-blue-500" },
    { icon: Battery, label: "Tired", color: "text-red-500" },
    { icon: Coffee, label: "Distracted", color: "text-purple-500" },
  ];

  const handleSubmit = () => {
    if (selectedMood && productivity) {
      onMoodUpdate?.(selectedMood, productivity, notes);
    }
  };

  return (
    <Card className="mt-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">How are you feeling?</CardTitle>
        <CardDescription>Track your mood and productivity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Mood Selection */}
          <div className="grid grid-cols-4 gap-2">
            {moods.map(({ icon: Icon, label, color }) => (
              <Button
                key={label}
                variant={selectedMood === label ? "default" : "outline"}
                className="flex flex-col items-center p-2 h-auto"
                onClick={() => setSelectedMood(label)}
              >
                <Icon className={`h-5 w-5 mb-1 ${color}`} />
                <span className="text-xs">{label}</span>
              </Button>
            ))}
          </div>

          {/* Productivity Level */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Productivity Level</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <Button
                  key={level}
                  variant={productivity === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setProductivity(level)}
                  className="flex-1"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <p className="text-sm text-muted-foreground mb-2">Quick Notes (optional)</p>
            <Textarea
              placeholder="Any specific thoughts about this session?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="h-20"
            />
          </div>

          <Button
            className="w-full"
            disabled={!selectedMood || !productivity}
            onClick={handleSubmit}
          >
            Save Mood
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
