import React from 'react'
import { useContext, useEffect, useState } from "react"
import { ProductsContext } from '../context/ProductsContext'


const Addproduct = () => {

  // const {addProduct} = useContext(ProductsContext)  ;
  const { addProduct, updateProduct, editingProduct, setEditingProduct } = useContext(ProductsContext);


  useEffect(() => {
    if (editingProduct) setProduct(editingProduct);
  }, [editingProduct]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    isPopular: "",
    isAvailable: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();


    if (editingProduct) {
      updateProduct(product); 

    } else {
      addProduct(product);
    }

    setProduct({
      name: "",
      price: "",
      category: "",
      image: "",
      isPopular: false,
      isAvailable: false
    });

    setEditingProduct(null);
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  // console.log(product)
  return (
    <div>
      <h1>{editingProduct ? "Edit Product" : "Add Product"}</h1>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <input type="text"
          placeholder="add name"
          name="name"
          value={product.name}
          onChange={handleChange}

          required
        />

        {/* price */}
        <input
          type="number"
          name="price"
          value={product.price}
          placeholder="price"
          onChange={handleChange}
          required
        />

        {/* category */}
        <input type="text" placeholder="Category"
          name="category"
          value={product.category}
          onChange={handleChange}

          required
        />

        {/* image (just preview) */}
        {/* <input type="file" name="image" accept="image/*"
        /> */}
        <input type="text" placeholder="image url" name="image" value={product.image}
          onChange={handleChange}
          required />


        {/* isPopular (checkbox) */}
        <label>
          <input
            type="checkbox"
            name="isPopular"
            checked={product.isPopular}
            onChange={handleChange}
          />
          Popular?
        </label>
        {/* isAvailable (toggle) */}
        <label>
          <input
            type="checkbox"
            name="isAvailable"
            checked={product.isAvailable}
            onChange={handleChange}
          />
          Available?
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Addproduct
