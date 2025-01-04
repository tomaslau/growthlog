import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="" />
              <AvatarFallback>GP</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold mb-1">Growth Pro</h2>
              <p className="text-muted-foreground mb-4">growth@example.com</p>
              <Button variant="outline" size="sm">Edit Profile</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Google Sheets Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Connect your Google account to sync activities with Google Sheets
          </p>
          <Button>Connect Google Account</Button>
        </CardContent>
      </Card>

      <Button variant="destructive" className="w-full">
        <LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </div>
  );
}
