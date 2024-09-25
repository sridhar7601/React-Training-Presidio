import { useState, useEffect } from 'react';
import { User, Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';

interface Profile {
  id: number;
  type: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
  likeCount: number;
}

export default function Profiles() {
  let { type } = useParams();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(type,"type")

  useEffect(() => {
    const fetchDataWithDelay = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/profiles?type=${type}`);
      const data = await response.json();
      setTimeout(() => {
        setProfiles(data);
        setLoading(false);
      }, 4000); // 4-second delay
    };

    fetchDataWithDelay();
  }, [type]); 

  const handleLike = (id: number) => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === id ? { ...profile, likeCount: profile.likeCount + 1 } : profile
      )
    );
  };

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
          <div className="mt-4 flex items-center justify-between">
            <button
              className="text-red-500 flex items-center"
              onClick={() => handleLike(profile.id)}
            >
              <Heart className="w-5 h-5 mr-2" />
              Like
            </button>
            <p className="text-gray-600">{profile.likeCount} Likes</p>
          </div>
        </div>
      ))}
    </div>
  );
}
