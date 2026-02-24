import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
const Navbar = () => {


  const{Cart}= useContext(CartContext)
  return (
    <div>
        <h1>Order flow app</h1>
      <h4>Cart Qty:{Cart.length}</h4>
    </div>
  )
}

export default Navbar
