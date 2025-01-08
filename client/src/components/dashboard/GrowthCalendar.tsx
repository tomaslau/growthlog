import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { startOfYear, eachDayOfInterval, format, parseISO, isEqual } from "date-fns";
import { SelectTask } from "@db/schema";

// Demo data generator for when no real data is available
const generateDemoData = (startDate: Date, endDate: Date) => {
  const dates = eachDayOfInterval({ start: startDate, end: endDate });
  const demoData: Record<string, number> = {};

  dates.forEach(date => {
    const rand = Math.random();
    let activity = 0;
    if (rand > 0.7) activity = Math.floor(Math.random() * 4) + 1;
    demoData[format(date, 'yyyy-MM-dd')] = activity;
  });

  return demoData;
};

export function GrowthCalendar() {
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
  const dates = eachDayOfInterval({ start: yearStart, end: today });

  // Use demo data if no real data is available
  const demoData = generateDemoData(yearStart, today);

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

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">Your Growth Journey</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Months row */}
        <div className="flex text-xs mb-1">
          <div className="w-8" /> {/* Spacer for day labels */}
          <div className="flex-1 grid grid-cols-[repeat(52,1fr)] gap-[2px]">
            {months.map((month, i) => (
              <div
                key={month}
                className="text-xs text-muted-foreground"
                style={{
                  gridColumn: Math.floor((i * 52) / 12) + 1
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
            <div className="grid grid-cols-[repeat(52,1fr)] gap-[2px]">
              {dates.map((date, i) => {
                const level = getActivityLevel(date);
                return (
                  <div
                    key={i}
                    className="h-[10px] w-[10px] rounded-[2px] transition-colors duration-200"
                    style={{
                      backgroundColor: `var(--activity-${level})`,
                      opacity: level === 0 ? 0.2 : 1
                    }}
                    title={`${format(date, 'MMM d, yyyy')}: ${level} activities`}
                  />
                );
              })}
            </div>
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
                backgroundColor: `var(--activity-${level})`,
                opacity: level === 0 ? 0.2 : 1
              }}
            />
          ))}
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default GrowthCalendar;