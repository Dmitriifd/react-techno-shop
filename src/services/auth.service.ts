import { api } from './api-client';

export interface AuthResponse {
  _id: string;
  email: string;
  isAdmin: boolean;
  name: string;
}

type AuthData = {
  name: string;
  email: string;
  password: string;
};

type AuthLoginData = Omit<AuthData, 'name'>;

const login = async (data: AuthLoginData) => {
  const { password, email } = data;
  const response = await api.post('/users/auth', { email, password });

  return response.data;
};

const register = async (data: AuthData) => {
  const { name, password, email } = data;
  const response = await api.post('/users', { email, password, name });

  return response.data;
};

const logout = async () => {
  const response = await api.post('/users/logout');

  return response.data;
};

export const AuthService = {
  login,
  register,
  logout,
};
