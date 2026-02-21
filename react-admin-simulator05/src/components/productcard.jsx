import { useContext, useEffect, useState } from "react"

import { ProductsContext } from '../context/ProductsContext'
import { useNavigate } from "react-router-dom";
const Productcard = () => {


  const { products, deleteProduct, updateProduct, editingProduct, setEditingProduct } = useContext(ProductsContext);
  // const {products} = ProductsContext(products)
  const editproduct = () => {

  }
  const navigate = useNavigate();
  return (
    <div className='menu'>
      {products.map((food) => (
        <div key={food.id} className='card'>
          <img src={food.image} alt="" />
          <h3>{food.name}</h3>
          <h5>Price.{food.price}</h5>
          <h4 >{food.category}</h4>
          <h6>ID {food.id}</h6>
          <button onClick={() => {
            setEditingProduct(food);
          }}>Edit</button>
          <button onClick={() => { deleteProduct(food.id) }}>Delete</button>

        </div>
      ))}
    </div>

  )
}

export default Productcard
