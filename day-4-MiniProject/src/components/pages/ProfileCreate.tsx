import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileContext } from './../contexts/ProfileContext';

interface Profile {
  type: 'groom' | 'bride';
  name: string;
  age: number;
  occupation: string;
  location: string;
  likeCount: number;
}

export default function ProfileCreate() {
  const [profile, setProfile] = useState<Profile>({
    type: 'groom',
    name: '',
    age: 0,
    occupation: '',
    location: '',
    likeCount: 0,
  });
  const navigate = useNavigate();
  const { profiles, setProfiles } = useProfileContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        const newProfile = await response.json();
        setProfiles([...profiles, newProfile]);
        navigate('/home');
      } else {
        console.error('Error creating profile:', await response.json());
      }
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div>
      <h1>Create a New Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Profile Type:</label>
          <select
            id="type"
            name="type"
            value={profile.type}
            onChange={handleChange}
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
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={profile.occupation}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={profile.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}
