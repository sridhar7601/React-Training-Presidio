import { useState, useEffect } from 'react';

interface Profile {
  id: number;
  type: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
}

export default function GroomProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/profiles?type=groom')
      .then(response => response.json())
      .then(data => setProfiles(data));
  }, []);

  return (
    <div>
      <h2>Groom Profiles</h2>
      {profiles.map(profile => (
        <div key={profile.id}>
          <h3>{profile.name}</h3>
          <p>Age: {profile.age}</p>
          <p>Occupation: {profile.occupation}</p>
          <p>Location: {profile.location}</p>
        </div>
      ))}
    </div>
  );
}