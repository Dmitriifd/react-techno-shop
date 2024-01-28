import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '@store/auth/useAuth';

const AdminRoute = () => {
  const userInfo = useAuthStore((state) => state.userInfo);
  return userInfo?.isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

export { AdminRoute };
