import { UserInfo } from 'types/user';

import { api } from './api-client';

type UpdateProfileData = {
  name: string;
  surname: string;
  phone: string;
  email: string;
};

const getProfile = async () => {
  const response = await api.get('/users/profile');
  return response.data;
};

const updateProfile = async (data: UpdateProfileData) => {
  const response = await api.put<UserInfo>('/users/profile', data);
  return response.data;
};

export const ProfileService = {
  getProfile,
  updateProfile,
};
