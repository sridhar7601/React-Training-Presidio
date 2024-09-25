import React, { useState, useEffect } from 'react';
import { User, Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useProfileContext } from '../../components/contexts/ProfileContext';
export default function Profiles() {
  const { type } = useParams<{ type: string }>();
  const { profiles, loading, fetchProfiles, handleLike } = useProfileContext();
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (type) {
      fetchProfiles(type);
    }
  }, [type]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProfiles(profiles);
    } else {
      const filtered = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProfiles(filtered);
    }
  }, [searchTerm, profiles]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(6).fill(null).map((_, index) => (
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
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfiles.map(profile => (
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

      {filteredProfiles.length === 0 && !loading && (
        <div className="text-center text-gray-500">No profiles found</div>
      )}
    </div>
  );
}