import { create } from "zustand";
const useCartStore = create((set) => ({
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  addToCart: (item, quantity = 1) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        const updatedCart = [...state.cartItems];
        updatedCart[existingItemIndex].quantity += quantity;
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        alert("Added to cart");
        return { cartItems: updatedCart };
      } else {
        // If the item is not in the cart, add it with the given quantity
        const updatedCart = [
          ...state.cartItems,
          { ...item, quantity: quantity },
        ];
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        alert("Added to cart");
        return { cartItems: updatedCart };
      }
    }),
}));

export default useCartStore;
