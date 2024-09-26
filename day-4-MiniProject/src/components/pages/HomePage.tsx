import React, { useState, useMemo } from 'react';
import { useProfileContext } from '../contexts/ProfileContext';
import ProfileForm from '../forms/ProfileForm';
import Modal from '../common/Modal';
import ProfileCard from '../common/ProfileCard';
import { Profile } from '../../types/types';
import { PlusCircle, Search } from 'lucide-react';

const HomePage: React.FC = () => {
  // from context destructuring and getting all data
  const { 
    profiles, 
    isLoading: profilesLoading, 
    error: profilesError, 
    createProfile, 
    updateProfile 
  } = useProfileContext();

  const [currentType, setCurrentType] = useState<'groom' | 'bride' | ''>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

//where code runs when
// 1 profile sets at initial 
// 2 when filtered with bride or broom
// 3 when used any search params
  const filteredProfiles = useMemo(() => {
    return profiles
      .filter(profile => currentType ? profile.type === currentType : true)
      .filter(profile => profile.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [profiles, currentType, searchQuery]);

//used to create the profile with react query 
  const handleCreateProfile = async (data: Omit<Profile, 'id' | 'isLiked'>) => {
    await createProfile(data);
    setIsCreateModalOpen(false);
  };

//used to update the profile with react query 
  const handleUpdateProfile = async (data: Omit<Profile, 'id' | 'isLiked'>) => {
    if (editingProfile) {
      await updateProfile({ ...data, id: editingProfile.id, isLiked: editingProfile.isLiked });
      setEditingProfile(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">MatchMaker Profiles</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentType('')}
              className={`px-4 py-2 rounded-full ${currentType === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300`}
            >
              All Profiles
            </button>
            <button
              onClick={() => setCurrentType('groom')}
              className={`px-4 py-2 rounded-full ${currentType === 'groom' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300`}
            >
              Grooms
            </button>
            <button
              onClick={() => setCurrentType('bride')}
              className={`px-4 py-2 rounded-full ${currentType === 'bride' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300`}
            >
              Brides
            </button>
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300"
          >
            <PlusCircle size={20} className="mr-2" />
            Create Profile
          </button>
        </div>
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
        </div>
        {profilesLoading && <p className="text-center text-gray-600">Loading profiles...</p>}
        {profilesError && <p className="text-center text-red-500">Error: {profilesError.message}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map(profile => (
            <ProfileCard key={profile.id} profile={profile} onEdit={setEditingProfile} />
          ))}
        </div>
        {filteredProfiles.length === 0 && !profilesLoading && (
          <p className="text-center text-gray-500 mt-8">No profiles found.</p>
        )}
      </main>
      <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Create a New Profile">
        <ProfileForm
          onSubmit={handleCreateProfile}
          onCancel={() => setIsCreateModalOpen(false)}
        />
      </Modal>
      <Modal isOpen={!!editingProfile} onClose={() => setEditingProfile(null)} title="Edit Profile">
        {editingProfile && (
          <ProfileForm
            profile={editingProfile}
            onSubmit={handleUpdateProfile}
            onCancel={() => setEditingProfile(null)}
          />
        )}
      </Modal>
    </div>
  );
};

export default HomePage;