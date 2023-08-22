import { create } from "zustand";

const useAuth = create((set) => ({
  isOpen: false,
  isUserValid: localStorage.getItem("user") ? true : false,
  type: "login",
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false }),
  setType: (type) => set({ type: type }),
  setIsUserValid: (arg) => {
    return set({ isUserValid: arg });
  },
  onLogout: () => {
    localStorage.removeItem("user");
    return set({ isUserValid: false });
  },
}));

export default useAuth;
