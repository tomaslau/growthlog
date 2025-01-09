import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { startOfYear, endOfYear, eachDayOfInterval, format, parseISO, isEqual } from "date-fns";
import { SelectTask } from "@db/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Demo data generator for when no real data is available
const generateDemoData = (startDate: Date, endDate: Date) => {
  const dates = eachDayOfInterval({ start: startDate, end: endDate });
  const demoData: Record<string, number> = {};

  dates.forEach(date => {
    // Create more realistic patterns
    const dayOfWeek = date.getDay();
    const rand = Math.random();

    // More activity during weekdays
    let activity = 0;
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not weekend
      if (rand > 0.6) activity = Math.floor(Math.random() * 4) + 1;
    } else {
      if (rand > 0.8) activity = Math.floor(Math.random() * 2) + 1;
    }

    // Create streaks
    const previousDay = format(new Date(date.getTime() - 86400000), 'yyyy-MM-dd');
    if (demoData[previousDay] && demoData[previousDay] > 0 && rand > 0.3) {
      activity = Math.min(4, demoData[previousDay] + (Math.random() > 0.5 ? 1 : -1));
    }

    demoData[format(date, 'yyyy-MM-dd')] = activity;
  });

  return demoData;
};

export const GrowthCalendar = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["", "Mon", "", "Wed", "", "Fri", ""];

  // Fetch tasks data with error handling
  const { data: tasksData } = useQuery<{ tasks: SelectTask[] }>({
    queryKey: ['/api/tasks/completed'],
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const today = new Date();
  const yearStart = startOfYear(today);
  const yearEnd = endOfYear(today);
  const dates = eachDayOfInterval({ start: yearStart, end: yearEnd });

  // Use demo data if no real data is available
  const demoData = generateDemoData(yearStart, yearEnd);

  // Calculate activity levels based on completed tasks or demo data
  const getActivityLevel = (date: Date): number => {
    if (!tasksData?.tasks) {
      return demoData[format(date, 'yyyy-MM-dd')] || 0;
    }

    const completedTasks = tasksData.tasks.filter(task => {
      const taskDate = task.completedAt ? parseISO(task.completedAt as unknown as string) : null;
      return taskDate && isEqual(taskDate, date);
    });

    const count = completedTasks.length;
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 4) return 2;
    if (count <= 6) return 3;
    return 4;
  };

  // Get descriptive text for activity level
  const getActivityDescription = (level: number): string => {
    switch (level) {
      case 0: return "No activities";
      case 1: return "Light activity";
      case 2: return "Moderate activity";
      case 3: return "High activity";
      case 4: return "Very high activity";
      default: return "Unknown activity level";
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Growthlog</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Months row */}
        <div className="flex text-xs mb-1">
          <div className="w-8" /> {/* Spacer for day labels */}
          <div className="flex-1 grid grid-cols-[repeat(53,1fr)] gap-[2px]">
            {months.map((month, i) => (
              <div
                key={month}
                className="text-xs text-muted-foreground"
                style={{
                  gridColumn: Math.floor((i * 53) / 12) + 1
                }}
              >
                {month}
              </div>
            ))}
          </div>
        </div>

        {/* Calendar grid */}
        <div className="flex">
          {/* Day labels */}
          <div className="w-8 text-xs text-muted-foreground">
            {days.map(day => (
              <div key={day} className="h-[10px] mb-[2px] text-right pr-2">
                {day}
              </div>
            ))}
          </div>

          {/* Activity squares */}
          <div className="flex-1">
            <TooltipProvider>
              <div className="grid grid-cols-[repeat(53,1fr)] gap-[2px]">
                {dates.map((date, i) => {
                  const level = getActivityLevel(date);
                  const opacity = level === 0 ? 0.35 : 1; // Increased empty square visibility
                  const color = level === 0 
                    ? 'var(--muted)'  // Use muted color for empty squares
                    : 'var(--primary)'; // Use primary color for active squares
                  const intensityOpacity = level === 0 ? 1 : (0.4 + (level * 0.15)); // Adjust intensity based on level

                  return (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <div
                          className="h-[10px] w-[10px] rounded-[2px] transition-colors duration-200 cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset-1"
                          style={{
                            backgroundColor: color,
                            opacity: level === 0 ? opacity : intensityOpacity,
                            gridRow: date.getDay() + 1,
                            gridColumn: Math.floor((date.getTime() - yearStart.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1
                          }}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        <div className="px-2 py-1">
                          <div className="font-medium">{format(date, 'MMMM d, yyyy')}</div>
                          <div className="text-muted-foreground mt-1">
                            {getActivityDescription(level)}
                            <div className="mt-0.5">
                              {level === 0 ? 'No tasks completed' : `${level} task${level === 1 ? '' : 's'} completed`}
                            </div>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Activity level legend */}
        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map(level => (
            <div
              key={level}
              className="h-[10px] w-[10px] rounded-[2px]"
              style={{
                backgroundColor: level === 0 ? 'var(--muted)' : 'var(--primary)',
                opacity: level === 0 ? 0.35 : (0.4 + (level * 0.15))
              }}
            />
          ))}
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  );
};