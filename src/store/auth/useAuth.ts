import { UserInfo } from 'types/user';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AuthStore = {
  userInfo: UserInfo | null;
  setCredentials: (data: UserInfo) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        userInfo: null,
        setCredentials: (data) => set({ userInfo: data }),
        logout: () => {
          set({ userInfo: null });
          localStorage.clear();
        },
      }),
      {
        name: 'user-storage',
      },
    ),
    { name: 'auth' },
  ),
);
