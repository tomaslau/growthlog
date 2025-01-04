import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GrowthCalendar() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["", "Mon", "Wed", "Fri"];

  // Helper to generate activity levels (0-4)
  const getActivityLevel = (i: number, j: number) => {
    // Mock data - in reality this would come from API
    const random = Math.random();
    if (random > 0.8) return 4;
    if (random > 0.6) return 3;
    if (random > 0.4) return 2;
    if (random > 0.2) return 1;
    return 0;
  };

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
              {Array.from({ length: 7 * 52 }).map((_, i) => {
                const level = getActivityLevel(Math.floor(i / 7), i % 7);
                return (
                  <div
                    key={i}
                    className="h-[10px] w-[10px] rounded-sm transition-colors duration-200"
                    style={{
                      backgroundColor: `var(--activity-${level})`,
                      opacity: level === 0 ? 0.2 : 1
                    }}
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
