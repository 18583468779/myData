import { create } from "zustand";

type Menu = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const useMenuStore = create<Menu>()((set) => ({
  visible: false,
  setVisible: (visible) => {
    set({ visible });
  },
}));
