import { api } from './api-client';

const getProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

export const ProfileService = {
  getProfile,
};
