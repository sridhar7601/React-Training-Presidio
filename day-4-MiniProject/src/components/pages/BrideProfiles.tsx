import { useState, useEffect } from 'react';
import { User } from 'lucide-react';

interface Profile {
  id: number;
  type: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
}

export default function BrideProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    // Simulating a 4-second delay before setting the data
    const fetchDataWithDelay = async () => {
      const response = await fetch('http://localhost:3001/profiles?type=bride');
      const data = await response.json();
      setTimeout(() => {
        setProfiles(data);
        setLoading(false);
      }, 4000); // 4-second delay
    };

    fetchDataWithDelay();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill().map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-sm animate-pulse">
            <div className="flex items-center justify-center mb-4">
              <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Groom Profiles</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map(profile => (
          <div key={profile.id} className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center justify-center mb-4">
              <User className="h-16 w-16 bg-gray-300 rounded-full" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{profile.name}</h3>
            <p className="text-gray-600">Age: {profile.age}</p>
            <p className="text-gray-600">Occupation: {profile.occupation}</p>
            <p className="text-gray-600">Location: {profile.location}</p>
          </div>
        ))}
      </div>
      </>
  );
}
