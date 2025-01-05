import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { SelectUser } from '@db/schema';

export function useAuth() {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery<SelectUser>({
    queryKey: ['/api/auth/user'],
    staleTime: Infinity,
    retry: false,
  });

  const loginWithGoogle = () => {
    window.location.href = '/api/auth/google';
  };

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error('Logout failed');
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(['/api/auth/user'], null);
      window.location.href = '/';
    },
  });

  return {
    user,
    isLoading,
    loginWithGoogle,
    logout: logoutMutation.mutate,
  };
}
