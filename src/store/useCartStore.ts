import { Product } from 'types/product';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type CartProduct = Product & {
  quantity: number;
};

type CartStore = {
  cart: CartProduct[];
  totalPrice: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  cleanCart: () => void;
};

const calculateTotalPrice = (cart: CartProduct[]) => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        totalPrice: 0,
        open: false,
        addToCart: (product) => {
          set((state) => {
            const updatedCart = [...state.cart];
            const existingProduct = updatedCart.find((item) => item?._id === product?._id);

            if (existingProduct) {
              existingProduct.quantity += 1;
            } else {
              const newProduct = { ...product, quantity: 1 };
              updatedCart.push(newProduct);
            }
            const totalPrice = calculateTotalPrice(updatedCart);
            return { cart: updatedCart, totalPrice, open: true };
          });
        },
        removeFromCart: (productId) => {
          set((state) => {
            const updatedCart = state.cart.filter((product) => product._id !== productId);
            const totalPrice = calculateTotalPrice(updatedCart);
            return { cart: updatedCart, totalPrice };
          });
        },
        increaseQuantity: (productId) => {
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item._id === productId ? { ...item, quantity: item.quantity + 1 } : item,
            );
            const totalPrice = calculateTotalPrice(updatedCart);
            return { cart: updatedCart, totalPrice };
          });
        },
        decreaseQuantity: (productId) => {
          set((state) => {
            const updatedCart = state.cart.map((item) =>
              item._id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
            );
            const totalPrice = calculateTotalPrice(updatedCart);
            return { cart: updatedCart, totalPrice };
          });
        },
        setOpen: (open) => set(() => ({ open })),
        cleanCart: () => set((state) => ({ ...state, cart: [], totalPrice: 0 })),
      }),
      { name: 'cart-storage' },
    ),
    { name: 'cart' },
  ),
);
