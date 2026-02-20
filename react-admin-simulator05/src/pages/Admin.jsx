import { useEffect, useState } from "react"

const Admin = () => {
  const [product, setProduct] = useState({
    name:"",
    price:"",
    category:"",
    image:"",
    ispopular:"",
    isAvailable:""
  })
const handleSubmit = (e) => {
  e.preventDefault();
  const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
  const newProducts = [...existingProducts, product];
  localStorage.setItem("products", JSON.stringify(newProducts));
  setProduct({ name:"", price:"", category:"", image:"", isPopular:false, isAvailable:false });
}


  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setProduct(prev => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value
  }));
}



  return (
    <div>
      Admin page
      <h1>Added products</h1>
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
         name="name"
         value={product.category}
          onChange={handleChange} 

         required
         />

        {/* image (just preview) */}
        <input type="file" name="image" accept="image/*" 
        />


        {/* isPopular (checkbox) */}
        <label>
          <input type="checkbox" name="isPopular" value="yes" />
          Popular?
        </label>
        {/* isAvailable (toggle) */}
        <label>
          <input type="checkbox" name="isAvailable" value="yes" />
          Available?
        </label>

        <button>Submit</button>
      </form>


    </div>
  )
}

export default Admin
