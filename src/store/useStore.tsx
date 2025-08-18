import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}
interface Store {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
  clearCart: () => void;
}





export const usestore = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const { cart } = get();
        const existingItem = cart.find((i) => i.id === item.id);

        if (existingItem) {
          set({
            cart: cart.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            cart: [...cart, { ...item, quantity: 1 }],
          });
        }
      },

      removeFromCart: (id) => {
        const { cart } = get();
        set({
          cart: cart.filter((i) => i.id !== id),
        });
      },

      updateCart: (id, quantity) => {
        const { cart } = get();
        set({
          cart: cart.map((i) => (i.id === id ? { ...i, quantity } : i)),
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart", // key in storage
    }
  )
);
