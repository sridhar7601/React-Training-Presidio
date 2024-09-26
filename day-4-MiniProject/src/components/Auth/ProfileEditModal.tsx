import React, { useState } from 'react';
import { useProfileContext } from '../contexts/ProfileContext';

interface ProfileEditModalProps {
  profile: {
    id: number;
    type: 'groom' | 'bride';
    name: string;
    age: number;
    occupation: string;
    location: string;
    likeCount: number;
  };
  closeModal: () => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({ profile, closeModal }) => {
  const [editedProfile, setEditedProfile] = useState(profile);
  const { setProfiles } = useProfileContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditedProfile({
      ...editedProfile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/profiles/${profile.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProfile),
      });

      if (response.ok) {
        const updatedProfile = await response.json();
        setProfiles(prevProfiles =>
          prevProfiles.map(p => (p.id === updatedProfile.id ? updatedProfile : p))
        );
        closeModal(); // Close modal after successful edit
      } else {
        console.error('Error updating profile:', await response.json());
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="type">Profile Type:</label>
            <select
              id="type"
              name="type"
              value={editedProfile.type}
              onChange={handleChange}
              className="block w-full p-2 border rounded"
            >
              <option value="groom">Groom</option>
              <option value="bride">Bride</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedProfile.name}
              onChange={handleChange}
              className="block w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={editedProfile.age}
              onChange={handleChange}
              className="block w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="occupation">Occupation:</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={editedProfile.occupation}
              onChange={handleChange}
              className="block w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={editedProfile.location}
              onChange={handleChange}
              className="block w-full p-2 border rounded"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg ml-4"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
