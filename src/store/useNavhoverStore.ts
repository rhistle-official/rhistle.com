import { create } from "zustand";

interface IHoverStore {
  hovered: boolean;
  setHovered: (value: boolean) => void;
}

export const useHoverStore = create<IHoverStore>((set) => ({
  hovered: false,
  setHovered: (value: boolean) => set({ hovered: value }),
}));
