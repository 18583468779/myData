import { create } from "zustand";

type Local = {
  hasWelcome: boolean;
  setHasWelcome: (read: boolean) => void;
};

const init = localStorage.getItem("hasWelcome");

export const useLocalStore = create<Local>()((set) => ({
  hasWelcome: init === "yes",
  setHasWelcome: (read: boolean) => {
    const result = read ? "yes" : "no";
    localStorage.setItem("hasWelcome", result);
    set({ hasWelcome: result === "yes" });
  },
}));
