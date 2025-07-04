import { create } from 'zustand';

interface SessionState {
  isLoggedIn: boolean;
  isLoading: boolean;
  checkSession: () => Promise<void>;
  setLoggedIn: (status: boolean) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  isLoggedIn: false,
  isLoading: true,
  checkSession: async () => {
    try {
      const res = await fetch("/api/session");
      const data = await res.json();
      set({ isLoggedIn: data.isLoggedIn, isLoading: false });
    } catch (error) {
      console.error("세션 확인 실패:", error);
      set({ isLoggedIn: false, isLoading: false });
    }
  },
  setLoggedIn: (status: boolean) => set({ isLoggedIn: status }),
})); 