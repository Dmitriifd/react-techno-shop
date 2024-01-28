import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService } from '@services/auth.service';
import { ProfileService } from '@services/profile.service';
import { useAuthStore } from '@store/auth/useAuth';

export const useProfilePage = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const userInfo = useAuthStore((state) => state.userInfo);

  useEffect(() => {
    if (!userInfo) {
      logout();
      navigate('/login');
    }

    ProfileService.getProfile().then((res) => {
      console.log(res);
    });
  }, [userInfo, navigate, logout]);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      logout();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLogout,
  };
};
