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
  discount: number;
  applyDiscount: (percent: number) => void;
  isDiscountApplied: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateCart: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const usestore = create<Store>()((set, get) => ({
  cart: [],
  discount: 0,
  isDiscountApplied: false,
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

  applyDiscount(percent) {
    const { discount, isDiscountApplied } = get();
    set({
      discount: discount + percent,
      isDiscountApplied: !isDiscountApplied,
    });
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
  getTotalPrice: () => {
    const { cart,  isDiscountApplied } = get();
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return isDiscountApplied ? total - 20 : total;
  },
}));
