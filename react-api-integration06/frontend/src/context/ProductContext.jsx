  import { createContext, useState, useEffect } from "react";

  export const ProductContext = createContext();

  export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
const [editingProduct, setEditingProduct] = useState(null);
    // load on app startt
    useEffect(() => {
      const saved =
        JSON.parse(localStorage.getItem("products")) || [];
      setProducts(saved);
    }, []);

    const startEdit = (product) => {
  setEditingProduct(product);
};
    // const addProduct = (product) => {
    //   setProducts((prev) => {
    //     const updated = [...prev, product];
    //     localStorage.setItem(
    //       "products",
    //       JSON.stringify(updated)
    //     );
    //     return updated;
    //   });
    // };

    const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
    };

    setProducts(prev => {
      const updated = [...prev, newProduct];
      localStorage.setItem("products", JSON.stringify(updated));
      return updated;
    });
  };


    const updateProduct  = (updatedProduct) => {
  setProducts(prev => {
    const updated = prev.map(p =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    localStorage.setItem("products", JSON.stringify(updated));
    return updated;
  });

  setEditingProduct(null);
};
   const deleteProduct = (id) => {
  setProducts(prev => {
    const updated = prev.filter(p => p.id !== id);
    localStorage.setItem("products", JSON.stringify(updated));
    return updated;
  });
};


    return (
      <ProductContext.Provider value={{ products, editingProduct, startEdit,
  updateProduct, addProduct, deleteProduct }}>
        {children}
      </ProductContext.Provider>
    );
  };