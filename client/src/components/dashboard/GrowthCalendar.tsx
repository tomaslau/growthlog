import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { startOfYear, eachDayOfInterval, format, parseISO, isEqual } from "date-fns";
import { SelectTask } from "@db/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function GrowthCalendar() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["", "Mon", "Wed", "Fri"];

  // Fetch tasks data
  const { data: tasksData, isLoading } = useQuery<{ tasks: SelectTask[] }>({
    queryKey: ['/api/tasks/completed'],
  });

  const today = new Date();
  const yearStart = startOfYear(today);
  const dates = eachDayOfInterval({ start: yearStart, end: today });

  // Calculate activity levels based on completed tasks
  const getActivityLevel = (date: Date) => {
    if (!tasksData?.tasks) return 0;

    const completedTasks = tasksData.tasks.filter(task => {
      const taskDate = parseISO(task.completedAt as unknown as string);
      return isEqual(taskDate, date);
    });

    const count = completedTasks.length;
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 4) return 2;
    if (count <= 6) return 3;
    return 4;
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Growth Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Skeleton className="h-[200px] w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Growth Journey</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Months row */}
        <div className="flex text-sm mb-2">
          <div className="w-10" /> {/* Spacer for day labels */}
          <div className="flex-1 grid grid-cols-[repeat(52,1fr)] gap-[3px]">
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
          <div className="w-10 text-xs text-muted-foreground">
            {days.map(day => (
              <div key={day} className="h-[10px] mb-[3px] text-right pr-2">
                {day}
              </div>
            ))}
          </div>

          {/* Activity squares */}
          <div className="flex-1">
            <div className="grid grid-cols-[repeat(52,1fr)] gap-[3px]">
              {dates.map((date, i) => {
                const level = getActivityLevel(date);
                return (
                  <div
                    key={i}
                    className="h-[10px] w-[10px] rounded-sm transition-colors duration-200"
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
        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map(level => (
            <div
              key={level}
              className="h-[10px] w-[10px] rounded-sm"
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