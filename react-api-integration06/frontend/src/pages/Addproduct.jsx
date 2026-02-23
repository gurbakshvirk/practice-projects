import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
const Addproduct = () => {
    //   const { addProduct,  } = useContext(ProductContext);
    const {
        addProduct,
        handleUpdateProduct,
        editingProduct
    } = useContext(ProductContext);




    //   handleUpdateProduct, editingProduct, setEditingProduct

    const [product, setProduct] = useState(
        {
            name: "",
            price: "",
            category: "",
            image: "",
            // isPopular: "",
            // isAvailable: ""
        }
    )

    useEffect(() => {
        if (editingProduct) {
            setProduct(editingProduct);
        }
    }, [editingProduct]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // addProduct(product)
        // const oldProducts = JSON.parse(localStorage.getItem("products")) || [];
        // const updatedProducts = [...oldProducts, product];
        // localStorage.setItem("products", JSON.stringify(updatedProducts));
        if (editingProduct) {
            handleUpdateProduct(editingProduct._id, product);
        } else {
            addProduct(product);
        }
        setProduct({
            name: "",
            price: "",
            category: "",
            image: "",
            // isPopular: false,
            // isAvailable: false
        });
    }
    const handleChange = (e) => {
        const { name, value, type, category, checked } = e.target;
        setProduct((prod) => ({
            ...prod,
            [name]: type === "checkbox" ? checked : value,
        }));
        // console.log(product)
    }
    // const savedProduct = JSON.parse(localStorage.getItem("products"));
    // console.log(savedProduct)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={product.name} onChange={handleChange} />
                <input type="number" name="price" value={product.price} onChange={handleChange} />
                <input type="text" name="image" value={product.image} onChange={handleChange} />
                <input type="text" name="category" value={product.category} onChange={handleChange} />
                {/* <input type="text" onChange={HandleChange}/> */}
                {/* <input type="text" onChange={HandleChange}/> */}
                <button>
                    {editingProduct ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    )
}
export default Addproduct
