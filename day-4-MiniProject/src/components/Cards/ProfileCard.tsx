import React, { useState } from 'react';
import { useProfileContext } from '../contexts/ProfileContext';
import ProfileEditModal from '../Auth/ProfileEditModal';

interface ProfileCardProps {
  profile: {
    id: number;
    type: 'groom' | 'bride';
    name: string;
    age: number;
    occupation: string;
    location: string;
    likeCount: number;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { setProfiles } = useProfileContext();

  // handle delete profile
  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/profiles/${id}`, {
        method: 'DELETE',
      });

      // remove deleted profile from local state
      setProfiles(prevProfiles => prevProfiles.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  // handle like button click
  const handleLike = async (id: number) => {
    try {
      const updatedProfile = { ...profile, likeCount: profile.likeCount + 1 };

      await fetch(`http://localhost:3001/profiles/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likeCount: updatedProfile.likeCount }),
      });

      // update the profile in local state
      setProfiles(prevProfiles =>
        prevProfiles.map(p => (p.id === id ? updatedProfile : p))
      );
    } catch (error) {
      console.error('Error liking profile:', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{profile.name}</h2>
      <p>Type: {profile.type}</p>
      <p>Age: {profile.age}</p>
      <p>Occupation: {profile.occupation}</p>
      <p>Location: {profile.location}</p>
      <p>Likes: {profile.likeCount}</p>

      <div className="mt-4 flex justify-between">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
          onClick={() => setIsEditModalOpen(true)} // Open edit modal
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={() => handleDelete(profile.id)} // Delete profile
        >
          Delete
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={() => handleLike(profile.id)} // Like button
        >
          Like 👍
        </button>
      </div>

      {isEditModalOpen && (
        <ProfileEditModal
          profile={profile}
          closeModal={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProfileCard;
