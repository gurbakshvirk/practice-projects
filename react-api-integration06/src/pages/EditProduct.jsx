import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const EditProduct = () => {
  const { editingProduct, updateProduct } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(formData);
  };

  if (!editingProduct) return null;

  return (
    <div>
      <h3>Edit Product</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
        />

        <button>Update</button>
      </form>
    </div>
  );
};

export default EditProduct;