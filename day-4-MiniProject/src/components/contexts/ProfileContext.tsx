import React, { createContext, useContext, ReactNode } from 'react';
import { useProfiles } from '../hooks/useProfiles';
import { Profile } from '../../types/types';

interface ProfileContextType {
  profiles: Profile[];
  isLoading: boolean;
  error: Error | null;
  createProfile: (profile: Omit<Profile, 'id' | 'isLiked'>) => Promise<void>;
  updateProfile: (profile: Profile) => Promise<void>;
  deleteProfile: (id: number) => Promise<void>;
  toggleLikeProfile: (id: number) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {
    profiles,
    isLoading,
    error,
    createProfile,
    updateProfile,
    deleteProfile,
    toggleLikeProfile
  } = useProfiles();

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        isLoading,
        error,
        createProfile,
        updateProfile,
        deleteProfile,
        toggleLikeProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfileContext must be used within a ProfileProvider');
  }
  return context;
};