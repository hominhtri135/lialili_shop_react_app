import { createJSONStorage, persist } from "zustand/middleware";

import { create } from "zustand";

const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return set({
            items: [...get().items.filter((item) => item.id !== data.id), data],
          });
          // return toast.success("Item updated in cart.");
        }

        return set({ items: [...get().items, data] });
        // toast.success("Item added to cart.");
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      removeAll: () => set({ items: [] }),
      setItems: (data) => set({ items: data }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
