import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Dec 1", score: 30 },
  { date: "Dec 7", score: 45 },
  { date: "Dec 14", score: 35 },
  { date: "Dec 21", score: 50 },
  { date: "Dec 28", score: 65 },
  { date: "Jan 4", score: 55 }
];

export function MomentumGraph() {
  return (
    <div className="h-[200px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="date" 
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            strokeWidth={2}
            stroke="hsl(var(--primary))"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 text-sm text-muted-foreground">
        Your momentum is trending upward! Keep completing daily growth tasks to maintain this progress.
      </div>
    </div>
  );
}