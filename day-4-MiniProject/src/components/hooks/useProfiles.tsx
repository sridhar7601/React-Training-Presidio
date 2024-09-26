import { useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchProfiles, createProfile, updateProfile, deleteProfile, toggleLikeProfile } from '../../Api/profileApi';
import { Profile } from '../../types/types';

export const useProfiles = () => {
  //using react-query and initilize the query
  const queryClient = useQueryClient();
// here we are getting data from api and seiitng it here with profile query key 
  const { data: profiles = [], isLoading, error } = useQuery('profiles', fetchProfiles);

  // cerate mutation and
  //  queryClient.invalidateQueries('profiles') is called to invalidate the 'profiles' query,
  //  forcing it to refetch the profiles so the ui stays up to date.
  const createMutation = useMutation(createProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });

  // remains same as create but update here
  const updateMutation = useMutation(updateProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });

  // remains same as create but delete here
  const deleteMutation = useMutation(deleteProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });
  // remains same as create but like in this case to update it
  const likeMutation = useMutation(toggleLikeProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries('profiles');
    },
  });

// defining functions with callback to memorize the whole function
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