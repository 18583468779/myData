import { create } from "zustand";

type Visible = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

export const useFloatStore = create<Visible>()((set) => ({
  visible: false,
  setVisible: (visible: boolean) => {
    set({ visible });
  },
}));
