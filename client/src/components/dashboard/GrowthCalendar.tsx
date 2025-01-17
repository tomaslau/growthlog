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

const generateDemoData = (startDate: Date, endDate: Date): Record<string, number> => {
  const dates = eachDayOfInterval({ start: startDate, end: endDate });
  const demoData: Record<string, number> = {};

  dates.forEach(date => {
    const dayOfWeek = date.getDay();
    const rand = Math.random();

    // Generate more realistic activity patterns
    let activity = 0;
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    if (!isWeekend && rand > 0.4) {
      activity = Math.floor(Math.random() * 4) + 1;
    } else if (isWeekend && rand > 0.7) {
      activity = Math.floor(Math.random() * 2) + 1;
    }

    // Create natural activity streaks
    const previousDay = format(new Date(date.getTime() - 86400000), 'yyyy-MM-dd');
    if (demoData[previousDay] && demoData[previousDay] > 0 && rand > 0.3) {
      activity = Math.max(1, Math.min(4, demoData[previousDay] + (Math.random() > 0.5 ? 1 : -1)));
    }

    demoData[format(date, 'yyyy-MM-dd')] = activity;
  });

  return demoData;
};

export const GrowthCalendar = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["", "Mon", "", "Wed", "", "Fri", ""];

  const { data: tasksData } = useQuery<{ tasks: SelectTask[] }>({
    queryKey: ['/api/tasks/completed'],
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  const { data: sheetsStatus } = useQuery<{ connected: boolean }>({
    queryKey: ['/api/sheets/status'],
    retry: 1,
  });

  const today = new Date();
  const yearStart = startOfYear(today);
  const yearEnd = endOfYear(today);
  const dates = eachDayOfInterval({ start: yearStart, end: yearEnd });
  const demoData = generateDemoData(yearStart, yearEnd);

  const getActivityLevel = (date: Date): number => {
    if (!tasksData?.tasks) {
      return demoData[format(date, 'yyyy-MM-dd')] || 0;
    }

    const completedTasks = tasksData.tasks.filter(task => {
      const taskDate = task.completedAt ? parseISO(task.completedAt as unknown as string) : null;
      return taskDate && isEqual(taskDate, date);
    });

    const count = completedTasks.length;
    return count === 0 ? 0 : Math.min(4, Math.ceil(count / 2));
  };

  const getActivityDescription = (level: number): string => {
    if (level === 0) return "No growth sprints completed";
    return `${level} growth sprint${level === 1 ? '' : 's'} completed`;
  };

  const getSquareColor = (level: number): string => {
    return level === 0 ? 'rgb(var(--muted))' : 'hsl(var(--primary))';
  };

  const getSquareOpacity = (level: number): number => {
    return level === 0 ? 0.1 : 0.3 + (level * 0.175);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Growthlog</CardTitle>
        {!sheetsStatus?.connected && (
          <p className="text-sm text-muted-foreground">
            Demo data shown. Connect Google Sheets to track your actual growth journey.
          </p>
        )}
      </CardHeader>
      <CardContent>
        <TooltipProvider delayDuration={0}>
          <div className="flex text-xs mb-1">
            <div className="w-8" />
            <div className="flex-1 grid grid-cols-[repeat(53,1fr)] gap-[2px]">
              {months.map((month, i) => (
                <div
                  key={month}
                  className="text-xs text-muted-foreground"
                  style={{ gridColumn: Math.floor((i * 53) / 12) + 1 }}
                >
                  {month}
                </div>
              ))}
            </div>
          </div>

          <div className="flex">
            <div className="w-8 text-xs text-muted-foreground">
              {days.map(day => (
                <div key={day} className="h-[10px] mb-[2px] text-right pr-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-[repeat(53,1fr)] gap-[2px]">
                {dates.map((date, i) => {
                  const level = getActivityLevel(date);
                  return (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <div
                          className="h-[10px] w-[10px] rounded-[2px] transition-colors duration-200 cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset-1"
                          style={{
                            backgroundColor: getSquareColor(level),
                            opacity: getSquareOpacity(level),
                            gridRow: date.getDay() + 1,
                            gridColumn: Math.floor((date.getTime() - yearStart.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1
                          }}
                        />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        <div className="px-2 py-1">
                          <div className="font-medium">{format(date, 'MMMM d, yyyy')}</div>
                          <div className="text-muted-foreground">{getActivityDescription(level)}</div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className="h-[10px] w-[10px] rounded-[2px]"
                style={{
                  backgroundColor: getSquareColor(level),
                  opacity: getSquareOpacity(level)
                }}
              />
            ))}
            <span>More</span>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};