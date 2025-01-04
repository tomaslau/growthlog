import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Lock, Globe } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";

interface ProfileVisibilityToggleProps {
  userId: number;
}

export default function ProfileVisibilityToggle({ userId }: ProfileVisibilityToggleProps) {
  const { toast } = useToast();

  // Fetch existing dashboard if any
  const { data: dashboardData } = useQuery({
    queryKey: [`/api/dashboards/user/${userId}`],
  });

  const dashboard = dashboardData?.dashboard;

  // Update visibility mutation
  const visibilityMutation = useMutation({
    mutationFn: async (isPublic: boolean) => {
      const url = dashboard
        ? `/api/dashboards/${dashboard.id}/settings`
        : '/api/dashboards/share';
      const method = dashboard ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          isPublic,
          title: "My Growth Dashboard",
          customizeableLayout: false,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update profile visibility');
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Visibility updated",
        description: dashboard?.isPublic 
          ? "Your profile is now public" 
          : "Your profile is now private",
      });
    },
  });

  const handleToggleVisibility = (isPublic: boolean) => {
    visibilityMutation.mutate(isPublic);
  };

  return (
    <div className="flex items-center gap-2">
      {dashboard?.isPublic ? (
        <Globe className="h-4 w-4 text-muted-foreground" />
      ) : (
        <Lock className="h-4 w-4 text-muted-foreground" />
      )}
      <Switch
        checked={dashboard?.isPublic ?? false}
        onCheckedChange={handleToggleVisibility}
      />
    </div>
  );
}
