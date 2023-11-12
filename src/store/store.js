import { create } from 'zustand';

const useStore = create(set => ({
  user: "furkan",
  setUser: user => set({ user })
}));

export default useStore;
