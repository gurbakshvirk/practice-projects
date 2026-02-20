import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
// import { useState } from "react"


const Navbar = ({ text, cart }) => {

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
      <h3>Navbar</h3>
      <h4>Cart count: {cart.length}</h4>
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
