import ProductCard from '../components/ProductCard'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext';



const Allproducts = () => {

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
        />
      </div>
    </div>
  )
}

export default Allproducts
