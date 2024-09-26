import axios from 'axios';
import { Profile } from '../types/types';

const API_URL = 'http://localhost:3001';

// Create an axios instance to set interceptors
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// example for refresh token 

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Get the token from localStorage or any storage
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       // Attach the token to the request headers
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response && error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         // Refresh token logic here (fetch a new token and retry the request)
//         const refreshToken = localStorage.getItem('refresh_token');
//         const { data } = await axios.post(`${API_URL}/refresh-token`, { token: refreshToken });
//         localStorage.setItem('access_token', data.accessToken);
//         // Attach new token to the original request
//         axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
//         return axiosInstance(originalRequest); // Retry the original request with the new token
//       } catch (refreshError) {
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// API calls using the axios instance

export const fetchProfiles = async (): Promise<Profile[]> => {
  const response = await axiosInstance.get('/profiles');
  return response.data;
};

export const createProfile = async (profile: Omit<Profile, 'id' | 'isLiked'>): Promise<Profile> => {
  const response = await axiosInstance.post('/profiles', { ...profile, isLiked: false });
  return response.data;
};

export const updateProfile = async (profile: Profile): Promise<Profile> => {
  const response = await axiosInstance.put(`/profiles/${profile.id}`, profile);
  return response.data;
};

export const deleteProfile = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/profiles/${id}`);
};

export const toggleLikeProfile = async (id: number): Promise<Profile> => {
  const profiles = await fetchProfiles();
  const profile = profiles.find(p => p.id === id);
  if (!profile) throw new Error('Profile not found');
  
  const response = await axiosInstance.patch(`/profiles/${id}`, { isLiked: !profile.isLiked });
  return response.data;
};
