import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate(); 
  const{Cart}= useContext(CartContext)
  return (
    <div>
        <h1 onClick={() => navigate("/")}>Order flow App</h1>
      <h4>Cart Qty:{Cart.length}</h4>
    </div>
  )
}

export default Navbar
