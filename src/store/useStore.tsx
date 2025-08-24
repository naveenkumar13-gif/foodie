import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  // image: string;
  description: string;
}
interface Store {
  cart: CartItem[];
  discount: number;
  isDiscount: boolean;
  precentage: (num: number) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const usestore = create<Store>()((set, get) => ({
  cart: [],
  discount: 0,
  isDiscount: false,
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
  precentage(num) {
    set({
      discount: num,
      isDiscount: true,
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
  getTotalPrice: () => {
    const { cart, isDiscount } = get();
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return isDiscount ? total - 20 : total;
  },
}));
