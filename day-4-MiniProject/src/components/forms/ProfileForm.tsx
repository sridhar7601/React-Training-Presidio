import React from 'react';
import { useForm } from 'react-hook-form';
import { Profile } from '../../types/types';

interface ProfileFormProps {
  profile?: Profile;
  onSubmit: (data: Omit<Profile, 'id' | 'isLiked'>) => void;
  onCancel: () => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, onSubmit, onCancel }) => {
  const { register, handleSubmit } = useForm<Omit<Profile, 'id' | 'isLiked'>>({
    defaultValues: profile 
      ? { 
          type: profile.type, 
          name: profile.name, 
          age: profile.age, 
          occupation: profile.occupation, 
          location: profile.location 
        }
      : {
          type: 'groom',
          name: '',
          age: 0,
          occupation: '',
          location: '',
        },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register('type')} className="block w-full p-2 border rounded">
        <option value="groom">Groom</option>
        <option value="bride">Bride</option>
      </select>
      <input {...register('name')} placeholder="Name" className="block w-full p-2 border rounded mt-2" />
      <input {...register('age', { valueAsNumber: true })} placeholder="Age" type="number" className="block w-full p-2 border rounded mt-2" />
      <input {...register('occupation')} placeholder="Occupation" className="block w-full p-2 border rounded mt-2" />
      <input {...register('location')} placeholder="Location" className="block w-full p-2 border rounded mt-2" />
      <div className="mt-4">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          {profile ? 'Update' : 'Create'}
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg ml-4">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;