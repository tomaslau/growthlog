import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Link2, Twitter, Linkedin, Trophy, Star } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <div className="w-64 space-y-4">
      {/* Profile Info */}
      <Card>
        <CardContent className="pt-6">
          <div className="text-center mb-4">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback>GM</AvatarFallback>
            </Avatar>
            <h2 className="font-semibold mb-1">Growth Marketer</h2>
            <p className="text-sm text-muted-foreground mb-3">@growthpro</p>
            <Button variant="outline" size="sm" className="w-full">
              Edit profile
            </Button>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Active for 3 months
            </p>
            <p className="text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              San Francisco, CA
            </p>
            <p className="text-muted-foreground flex items-center gap-2">
              <Link2 className="h-4 w-4" />
              growthmarketer.com
            </p>
            <div className="flex items-center gap-2 pt-2">
              <Twitter className="h-4 w-4" />
              <Linkedin className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-4">Growth Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Ideas Tried</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Deep Work Hours</span>
              <span className="font-medium">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Current Streak</span>
              <span className="font-medium">4 days</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Points & Level */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Level 3</h3>
            <Star className="h-5 w-5 text-yellow-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Points</span>
              <span className="font-medium">1,250</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Next Level</span>
              <span className="font-medium">750 points away</span>
            </div>
            <div className="w-full bg-secondary h-2 rounded-full mt-2">
              <div className="bg-primary h-full rounded-full" style={{ width: '62.5%' }} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <h3 className="font-medium">Recent Achievements</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">🌱</Badge>
              <div>
                <p className="text-sm font-medium">First Steps</p>
                <p className="text-xs text-muted-foreground">Complete your first growth task</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">📈</Badge>
              <div>
                <p className="text-sm font-medium">Analytics Ace</p>
                <p className="text-xs text-muted-foreground">Complete 5 analytics tasks</p>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4">
            View All Achievements
          </Button>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="font-medium mb-4">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Growth Templates
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Activity Export
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              Google Sheets
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}