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
//creating a context for using usecontext hook
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // from hook destructuring it and using as a context
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
    // passing values to children with provider that can have all my contect states
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
// an error handlining for context 
export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfileContext must be used within a ProfileProvider');
  }
  return context;
};