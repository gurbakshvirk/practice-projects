import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
// import { useState } from "react"
import { CartContext } from "../context/Cartcontext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const Navbar = () => {


  const { cart } = useContext(CartContext);
  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()


  // const handleSearch = (e) => {
  //   e.preventDefault()

  //   if (!searchText.trim()) return

  //   navigate(`/menu?search=${searchText}`)
  // }
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (!value.trim()) {
      navigate("/menu");   // reset when empty
      return;
    }

    navigate(`/menu?search=${encodeURIComponent(value)}`);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div>
      <h3 onClick={() => navigate("/")}>Navbar</h3>
      <h4>Cart count: {cart.length}</h4>
      <Link to="/cart">
        <button>
          Go to cart Page
        </button>
      </Link>

      {/* <input type="text" placeholder='Search here..........'
        value={text}
        onChange={handleChange}
         /> */}


      <form>
        <input
          type="text"
          placeholder="Search food..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>


    </div>
  )
}

export default Navbar
