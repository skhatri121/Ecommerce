import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  addToCart: (item) =>
    set((state) => {
      if (!state.cartItems.some((cartItem) => cartItem.id === item.id)) {
        const updatedCart = [...state.cartItems, item];
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        alert("Added to cart");
        return { cartItems: updatedCart };
      }
      return state;
    }),
}));

export default useCartStore;
