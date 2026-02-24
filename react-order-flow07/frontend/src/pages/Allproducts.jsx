import ProductCard from '../components/ProductCard'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext';

import { CartContext } from '../context/CartContext';



const Allproducts = () => {
    const {addtoCart, Cart, setCart} = useContext(CartContext);

  const { products, editProduct,startEdit, deleteProduct } = useContext(ProductContext);

  // console.log(products)

  return (
    <div >
      <h4>All Products</h4>
      <div className="">
        <ProductCard
          products={products}
          // editProduct={editProduct}
          startEdit={startEdit}
          deleteProduct={deleteProduct}
          addtoCart={addtoCart}
          Cart={Cart}
          setCart={setCart}
        />
      </div>
    </div>
  )
}

export default Allproducts
