import { create } from "zustand";

const useShop = create((set) => ({
  isOpen: false,
  type: "checkout",
  onOpen: (type = "checkout") => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false }),
  setType: (type) => set({ type: type }),
}));

export default useShop;
