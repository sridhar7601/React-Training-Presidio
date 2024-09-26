import { useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchProfiles, createProfile, updateProfile, deleteProfile, toggleLikeProfile } from '../../Api/profileApi';
import { Profile } from '../../types/types';

export const useProfiles = () => {
  const queryClient = useQueryClient();

  const { data: profiles = [], isLoading, error } = useQuery('profiles', fetchProfiles);

  const createMutation = useMutation(createProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });

  const updateMutation = useMutation(updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });

  const deleteMutation = useMutation(deleteProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });

  const likeMutation = useMutation(toggleLikeProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });

  const createProfileCallback = useCallback(
    async (profile: Omit<Profile, 'id' | 'isLiked'>) => {
      await createMutation.mutateAsync(profile);
    },
    [createMutation]
  );

  const updateProfileCallback = useCallback(
    async (profile: Profile) => {
      await updateMutation.mutateAsync(profile);
    },
    [updateMutation]
  );

  const deleteProfileCallback = useCallback(
    async (id: number) => {
      await deleteMutation.mutateAsync(id);
    },
    [deleteMutation]
  );

  const toggleLikeProfileCallback = useCallback(
    async (id: number) => {
      await likeMutation.mutateAsync(id);
    },
    [likeMutation]
  );

  return {
    profiles,
    isLoading,
    error: error as Error | null,
    createProfile: createProfileCallback,
    updateProfile: updateProfileCallback,
    deleteProfile: deleteProfileCallback,
    toggleLikeProfile: toggleLikeProfileCallback,
  };
};