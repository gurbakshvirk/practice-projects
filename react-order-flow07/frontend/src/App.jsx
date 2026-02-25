import React from 'react'
import { Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Cartpage from './pages/Cartpage'
import Checkout from './pages/Checkout'
// import Menu from './pages/Menu' 

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Menu />} /> */}
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Admin />} />
      </Routes>

    </div>
  )
}

export default App