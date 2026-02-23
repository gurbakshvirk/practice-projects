import { createContext, useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deletetheProduct } from "../services/productService";
//  getProducts()
// createProduct(product)
// updateProduct(id, product)
// deleteProduct(id)



export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);



  // load on app startt
  useEffect(() => {
    const fetchProducts = async () => {
      const saved = await getProducts() || [];
      setProducts(saved);
    };
    fetchProducts();
  }, []);


  // console.log(products
  const startEdit = (product) => {
  setEditingProduct(product);
};


  // createProduct(product)
  const addProduct = async (product) => {
   try{
    const createdproduct = await createProduct(product);
    setProducts(old=>[...old, createdproduct])
   }catch (error) {
    console.error("Error adding product:", error);
  }
  };




  const deleteProduct = async (id) => {
  try {
    await deletetheProduct(id);

    setProducts(prev => prev.filter(p => p._id !== id));
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
  

const handleUpdateProduct = async (id, updatedData) => {
  try {
    const updatedFromServer = await updateProduct(id, updatedData);

    setProducts(prev =>
      prev.map(p => (p._id === id ? updatedFromServer : p))
    );

    setEditingProduct(null);
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

  console.log
  return (
    <ProductContext.Provider value={{
  products,
  editingProduct,
  startEdit,
  addProduct,
  handleUpdateProduct,
  deleteProduct
}}>
      {children}
    </ProductContext.Provider>
  );
};