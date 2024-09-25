import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface Profile {
  id: number;
  type: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
  likeCount: number;
}

interface ProfileContextType {
  profiles: Profile[];
  loading: boolean;
  setProfiles: React.Dispatch<React.SetStateAction<Profile[]>>;
  fetchProfiles: (type: string) => Promise<void>;
  handleLike: (id: number) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProfiles = async (type: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/profiles?type=${type}`);
      const data = await response.json();
      
      // Add 3 seconds delay before setting the profiles
      setTimeout(() => {
        setProfiles(data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setLoading(false);
    }
  };

  const handleLike = (id: number) => {
    setProfiles(
      profiles.map(profile =>
        profile.id === id ? { ...profile, likeCount: profile.likeCount + 1 } : profile
      )
    );
  };

  return (
    <ProfileContext.Provider value={{ profiles, loading, setProfiles, fetchProfiles, handleLike }}>
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