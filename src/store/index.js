import create from "zustand";
import { persist } from "zustand/middleware";

export const user = create(
  persist((set) => ({
    thisUser: false,
    userLogin: (userInfo) => set(() => ({ thisUser: userInfo })),
    userLogout: () => set({ thisUser: false }),
  }))
);
