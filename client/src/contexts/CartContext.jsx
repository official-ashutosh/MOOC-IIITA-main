import { createContext } from "react";

// Khởi tạo context với giá trị mặc định
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  itemCount: 0,
  setItemCount: () => {},
});
