import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {


    const [products, setProducts] = useState([])
    const [editingProduct, setEditingProduct] = useState(null);
    useEffect(() => {
        const stored = localStorage.getItem("products");
        let Strproducts = JSON.parse(stored)
        setProducts(Strproducts)
    }, [])

    const deleteProduct = (id) => {
        const updatedProducts = products.filter((item) => item.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };


    const updateProduct = (updatedProduct) => {
        const updatedProducts = products.map((item) =>
            item.id === updatedProduct.id ? updatedProduct : item
        );

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

   

    const addProduct = (product) => {
        const newProduct = { ...product, id: Date.now() };

        const updatedProducts = [...products, newProduct];

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    return (
        <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct,  editingProduct, setEditingProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};