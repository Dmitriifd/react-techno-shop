import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UserInfo = {
  name: string;
  email: string;
  isAdmin: boolean;
  _id: string;
};

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
  ),
);
