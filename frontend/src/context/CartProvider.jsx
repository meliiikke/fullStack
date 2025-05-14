import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cartItem) => {
    setCartItems((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item._id === cartItem._id
      );

      if (existingIndex !== -1) {
        // Ürün sepette zaten varsa quantity güncelle
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + cartItem.quantity,
        };
        return updatedCart;
      } else {
        // Yeni ürün olarak ekle
        return [
          ...prevCart,
          {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity : 1,
          },
        ];
      }
    });
  };

  const removeFromCart = (itemId) => {
    const filteredCartItems = cartItems.filter((cartItem) => {
      return cartItem._id !== itemId;
    });
    setCartItems(filteredCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
