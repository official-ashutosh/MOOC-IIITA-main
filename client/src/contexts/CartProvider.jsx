import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(cartItems.length);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, itemCount, setItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = { children: PropTypes.node.isRequired };

export default CartProvider;