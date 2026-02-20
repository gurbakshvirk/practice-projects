import React from 'react'
import { useState } from 'react'

const FoodCard = ({ foods, cart, setCart }) => {
  // const [cart, Setcart] = useState(cartqty)



  const addtocartbtn = (food) => {
    setCart((oldCart) => {
      const existingfood = oldCart.find((item) => item.id === food.id);
      if (existingfood) {
        // return updated cart
        return oldCart.map((item) => { if (item.id === food.id) { return {...item, qty: item.qty + 1 }}
      else { return item }
    }

      // item.id === food.id
      //   ? { ...item, qty: item.qty + 1 }
      //   : item
    );
  }
  // return new cart with added item
  return [...oldCart, { ...food, qty: 1 }];
});
};

console.log(cart)

return (
  <div className='menu'>
    {foods.map((food) => (
      <div key={food.id} className='card'>
        <h1>{food.name}</h1>
        <h1>Price.{food.price}</h1>
        <h1 >{food.category}</h1>
        <h1>ID {food.id}</h1>
        <button onClick={() => { addtocartbtn(food) }}>Add to cart</button>
      </div>
    ))}
  </div>
)
  }
export default FoodCard
