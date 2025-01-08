import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Link2, Twitter, Linkedin, Trophy, Star } from "lucide-react";

export function ProfileSidebar() {
  return (
    <div className="sticky top-4 space-y-3 max-h-[calc(100vh-2rem)] overflow-y-auto">
      {/* Profile Info */}
      <Card>
        <CardContent className="pt-4">
          <div className="text-center mb-3">
            <Avatar className="h-16 w-16 mx-auto mb-2">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback>GM</AvatarFallback>
            </Avatar>
            <h2 className="font-medium text-sm mb-0.5">Growth Marketer</h2>
            <p className="text-xs text-muted-foreground mb-2">@growthpro</p>
            <Button variant="outline" size="sm" className="w-full h-7 text-xs">
              Edit profile
            </Button>
          </div>

          <div className="space-y-1.5 text-xs">
            <p className="text-muted-foreground flex items-center gap-1.5">
              <Clock className="h-3 w-3 shrink-0" />
              <span className="truncate">Active for 3 months</span>
            </p>
            <p className="text-muted-foreground flex items-center gap-1.5">
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="truncate">San Francisco, CA</span>
            </p>
            <p className="text-muted-foreground flex items-center gap-1.5">
              <Link2 className="h-3 w-3 shrink-0" />
              <span className="truncate">growthmarketer.com</span>
            </p>
            <div className="flex items-center gap-1.5 pt-1.5">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Twitter className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Linkedin className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardContent className="pt-4">
          <h3 className="font-medium text-sm mb-2">Growth Stats</h3>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Tasks Completed</span>
              <span className="text-xs font-medium">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Deep Work Hours</span>
              <span className="text-xs font-medium">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Current Streak</span>
              <span className="text-xs font-medium">4 days</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Points & Level */}
      <Card>
        <CardContent className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-sm">Level 3</h3>
            <Star className="h-4 w-4 text-yellow-500" />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Total Points</span>
              <span className="text-xs font-medium">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Next Level</span>
              <span className="text-xs font-medium">13 tasks away</span>
            </div>
            <div className="w-full bg-secondary h-1.5 rounded-full mt-1.5">
              <div className="bg-primary h-full rounded-full" style={{ width: '48%' }} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="hidden lg:block">
        <CardContent className="pt-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Trophy className="h-4 w-4 text-yellow-500" />
            <h3 className="font-medium text-sm">Recent Achievements</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Badge variant="secondary" className="h-5 text-xs px-1.5">🌱</Badge>
              <div>
                <p className="text-xs font-medium">First Steps</p>
                <p className="text-[11px] text-muted-foreground">Complete your first task</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge variant="secondary" className="h-5 text-xs px-1.5">📈</Badge>
              <div>
                <p className="text-xs font-medium">Analytics Ace</p>
                <p className="text-[11px] text-muted-foreground">Complete 5 analytics tasks</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3 h-7 text-xs">
            View All Achievements
          </Button>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="hidden lg:block">
        <CardContent className="pt-4">
          <h3 className="font-medium text-sm mb-2">Quick Links</h3>
          <div className="space-y-1 text-xs">
            <Button variant="ghost" size="sm" className="w-full justify-start h-7 text-xs">
              Growth Templates
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start h-7 text-xs">
              Activity Export
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start h-7 text-xs">
              Google Sheets
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}