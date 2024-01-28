import { Navigate } from 'react-router-dom';

import { ProfileLayout } from '@components/layouts/ProfileLayout';
import { useAuthStore } from '@store/auth/useAuth';

const PrivateRoute = () => {
  const userInfo = useAuthStore((state) => state.userInfo);
  return userInfo ? <ProfileLayout /> : <Navigate to="/login" replace />;
};

export { PrivateRoute };
