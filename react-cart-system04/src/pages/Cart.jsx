import React, { useContext } from "react";
import { CartContext } from "../context/Cartcontext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeItem, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return <h2>Your Cart is Empty</h2>;
  }

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Qty: {item.qty}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

export default Cart;