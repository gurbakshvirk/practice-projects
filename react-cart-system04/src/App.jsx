import React from 'react'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import { CartProvider } from './context/Cartcontext'
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <CartProvider>
      <Navbar />
      {/* <Homepage />
      <Cart /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
}

export default App

