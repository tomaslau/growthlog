import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ActivityCalendar() {
  // Mock data for calendar grid
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["", "Tues", "Thurs", "Sat"];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Deep Work</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex text-sm">
          <div className="w-12"></div>
          <div className="flex-1 grid grid-cols-12 gap-1">
            {months.map(month => (
              <div key={month} className="text-center text-muted-foreground">
                {month}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          {days.map(day => (
            <div key={day} className="flex items-center h-8">
              <div className="w-12 text-sm text-muted-foreground">{day}</div>
              <div className="flex-1 grid grid-cols-52 gap-1">
                {Array(52).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="h-4 bg-primary/20 rounded-sm"
                    style={{
                      opacity: Math.random() > 0.7 ? 1 : 0.2
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
