import axios from 'axios';
import { Profile } from '../types/types';

const API_URL = 'http://localhost:3001';

export const fetchProfiles = async (): Promise<Profile[]> => {
  const response = await axios.get(`${API_URL}/profiles`);
  return response.data;
};

export const createProfile = async (profile: Omit<Profile, 'id' | 'isLiked'>): Promise<Profile> => {
  const response = await axios.post(`${API_URL}/profiles`, { ...profile, isLiked: false });
  return response.data;
};

export const updateProfile = async (profile: Profile): Promise<Profile> => {
  const response = await axios.put(`${API_URL}/profiles/${profile.id}`, profile);
  return response.data;
};

export const deleteProfile = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/profiles/${id}`);
};

export const toggleLikeProfile = async (id: number): Promise<Profile> => {
  const profile = await fetchProfiles().then(profiles => profiles.find(p => p.id === id));
  if (!profile) throw new Error('Profile not found');
  
  const response = await axios.patch(`${API_URL}/profiles/${id}`, { isLiked: !profile.isLiked });
  return response.data;
};