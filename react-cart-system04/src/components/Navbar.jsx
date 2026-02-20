import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
// import { useState } from "react"


const Navbar = ({ text }) => {

  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()


  const handleSearch = (e) => {
    e.preventDefault()

    if (!searchText.trim()) return
      
    navigate(`/menu?search=${searchText}`)
  }

  // const handleChange = (e) => {
  //   setSearchText(e.target.value);
  // };
  return (
    <div>
      <h3>Navbar</h3>
      {/* <input type="text" placeholder='Search here..........'
        value={text}
        onChange={handleChange} /> */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search food..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>


    </div>
  )
}

export default Navbar
