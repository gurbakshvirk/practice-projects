import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart((oldCart) => {
      const existing = oldCart.find((item) => item.id === food.id);

      if (existing) {
        return oldCart.map((item) =>
          item.id === food.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...oldCart, { ...food, qty: 1 }];
    });
  };
console.log(cart)
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};