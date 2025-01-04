import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Share2, Copy, Lock, Globe } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";

interface ShareDashboardProps {
  userId: number;
}

export default function ShareDashboard({ userId }: ShareDashboardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  // Fetch existing dashboard if any
  const { data: dashboardData } = useQuery({
    queryKey: [`/api/dashboards/user/${userId}`],
    enabled: isOpen, // Only fetch when dialog is open
  });

  const dashboard = dashboardData?.dashboard;

  // Create/Update dashboard mutation
  const dashboardMutation = useMutation({
    mutationFn: async (values: {
      isPublic: boolean;
      customizeableLayout: boolean;
      title: string;
      description?: string;
    }) => {
      const url = dashboard
        ? `/api/dashboards/${dashboard.id}/settings`
        : '/api/dashboards/share';
      const method = dashboard ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          ...values,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update dashboard settings');
      }

      return res.json();
    },
  });

  const handleCopyLink = () => {
    if (dashboard?.shareToken) {
      const shareUrl = `${window.location.origin}/share/${dashboard.shareToken}`;
      navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "Share this link with others to view your dashboard.",
      });
    }
  };

  const handleTogglePublic = (isPublic: boolean) => {
    dashboardMutation.mutate({
      isPublic,
      customizeableLayout: dashboard?.customizeableLayout ?? false,
      title: dashboard?.title ?? "My Growth Dashboard",
      description: dashboard?.description,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share Dashboard
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Growth Dashboard</DialogTitle>
          <DialogDescription>
            Make your growth journey public or keep it private
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                {dashboard?.isPublic ? (
                  <Globe className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
                <h4 className="font-medium">Visibility</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {dashboard?.isPublic
                  ? "Anyone with the link can view your dashboard"
                  : "Only you can see your dashboard"}
              </p>
            </div>
            <Switch
              checked={dashboard?.isPublic ?? false}
              onCheckedChange={handleTogglePublic}
            />
          </div>

          {dashboard?.isPublic && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Share link</label>
              <div className="flex gap-2">
                <Input
                  readOnly
                  value={`${window.location.origin}/share/${dashboard.shareToken}`}
                />
                <Button variant="outline" size="icon" onClick={handleCopyLink}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
