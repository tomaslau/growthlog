import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function Profile() {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const reconnectSheetsMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch('/api/auth/sheets/reconnect', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Google Sheets reconnected successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleLogout = async () => {
    try {
      await logout();
      setLocation('/');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return null;
  }

  const initials = user.displayName
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase() || '??';

  return (
    <div className="max-w-2xl mx-auto space-y-8 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.profilePicture || ''} alt={user.displayName || ''} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold mb-1">{user.displayName}</h2>
              <p className="text-muted-foreground mb-4">{user.email}</p>
              <div className="space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://myaccount.google.com/profile', '_blank')}
                >
                  Manage Google Account
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Google Sheets Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {user.sheetsSpreadsheetId ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              )}
              <p className="text-muted-foreground">
                {user.sheetsSpreadsheetId
                  ? "Your growth data is being synced with Google Sheets"
                  : "Google Sheets integration is not set up"}
              </p>
            </div>

            {user.sheetsSpreadsheetId && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Spreadsheet ID: {user.sheetsSpreadsheetId}
                </p>
                <div className="space-x-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`https://docs.google.com/spreadsheets/d/${user.sheetsSpreadsheetId}`, '_blank')}
                  >
                    Open Spreadsheet
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => reconnectSheetsMutation.mutate()}
                    disabled={reconnectSheetsMutation.isPending}
                  >
                    <RefreshCw className={`h-4 w-4 mr-2 ${
                      reconnectSheetsMutation.isPending ? 'animate-spin' : ''
                    }`} />
                    Reconnect
                  </Button>
                </div>
              </div>
            )}

            {!user.sheetsSpreadsheetId && (
              <Button 
                onClick={() => window.location.href = '/api/auth/google'}
                disabled={reconnectSheetsMutation.isPending}
              >
                Connect Google Sheets
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Button 
        variant="destructive" 
        className="w-full"
        onClick={handleLogout}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </div>
  );
}