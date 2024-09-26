import React from 'react';
import { Profile } from '../../types/types';
import { useMutation, useQueryClient } from 'react-query';
import { deleteProfile, toggleLikeProfile } from '../../Api/profileApi';
import { User, Briefcase, MapPin, Heart, Edit, Trash2 } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  onEdit: (profile: Profile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onEdit }) => {
  const queryClient = useQueryClient();

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

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {profile.name.charAt(0)}
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-sm text-gray-600">{profile.type}</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <User size={18} className="mr-2" />
            <span>{profile.age} years old</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Briefcase size={18} className="mr-2" />
            <span>{profile.occupation}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin size={18} className="mr-2" />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
        <button
          onClick={() => onEdit(profile)}
          className="text-yellow-500 hover:text-yellow-600 transition duration-300"
        >
          <Edit size={20} />
        </button>
        <button
          onClick={() => deleteMutation.mutate(profile.id)}
          className="text-red-500 hover:text-red-600 transition duration-300"
        >
          <Trash2 size={20} />
        </button>
        <button
          onClick={() => likeMutation.mutate(profile.id)}
          className={`${profile.isLiked ? 'text-pink-500' : 'text-gray-400'} hover:text-pink-600 transition duration-300`}
        >
          <Heart size={20} fill={profile.isLiked ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;