import { create } from "zustand";

const useAuth = create((set) => ({
  isOpen: false,
  user: JSON.parse(localStorage.getItem("user")) || [],
  isUserValid: localStorage.getItem("user") ? true : false,
  type: "login",
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ isOpen: false }),
  setType: (type) => set({ type: type }),
  setIsUserValid: (arg) => {
    return set({ isUserValid: arg });
  },
  setUser: (data) => {
    return set({ user: data });
  },
  onLogout: () => {
    localStorage.removeItem("user");
    return set({ isUserValid: false, user: [] });
  },
}));

export default useAuth;
