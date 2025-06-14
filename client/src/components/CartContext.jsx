// src/components/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 // sample structure
const addToCart = (item) => {
  setCartItems((prev) => [...prev, item]); // item includes image field now
};


  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item, i) => i !== prevItems.indexOf(itemToRemove))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
