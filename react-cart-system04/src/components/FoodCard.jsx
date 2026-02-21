import React from 'react'
import { useState } from 'react'
import {CartContext} from "../context/Cartcontext";
import { useContext } from "react";
const FoodCard = ({ foods, cart, setCart }) => {
const { addToCart } = useContext(CartContext);
return (
  <div className='menu'>
    {foods.map((food) => (
      <div key={food.id} className='card'>
        <h1>{food.name}</h1>
        <h1>Price.{food.price}</h1>
        <h1 >{food.category}</h1>
        <h1>ID {food.id}</h1>
        <button onClick={() => { addToCart(food) }}>Add to cart</button>
      </div>
    ))}
  </div>
)
  }
export default FoodCard
