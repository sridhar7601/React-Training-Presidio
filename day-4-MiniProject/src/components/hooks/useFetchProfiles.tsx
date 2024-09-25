import { useState, useEffect } from 'react';

interface Profile {
  id: number;
  type: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
  likeCount: number;
}

export function useFetchProfiles(type: string) {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataWithDelay = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/profiles?type=${type}`);
        const data = await response.json();
        
        // Add 3 seconds delay before setting the profiles
        setTimeout(() => {
          setProfiles(data);
          setLoading(false);
        }, 0);
      } catch (error) {
        console.error('Error fetching profiles:', error);
        setLoading(false);
      }
    };

    fetchDataWithDelay();
  }, [type]);

  return { profiles, loading, setProfiles };
}
