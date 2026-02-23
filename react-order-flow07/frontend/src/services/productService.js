// apis to create
// getProducts()
// createProduct(product)
// updateProduct(id, product)
// deleteProduct(id)


// structure copied from backend
// app.use("/api/products", productRoutes);
// router.get("/", getProducts);
// router.get("/:id", getSingleProduct);
// router.post("/", createProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

const API = import.meta.env.VITE_API_URL;

const BASEURL =`${API}/api/products`


export const getProducts = async () => {
    const response = await fetch(`${BASEURL}`);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
}
// console.log(getProducts)
// const response = await getProducts();
// console.log(response)



export const createProduct = async (product) => {
  const response = await fetch(BASEURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${BASEURL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return response.json();
};



export const deletetheProduct = async (id) => {
  const response = await fetch(`${BASEURL}/${id}`, {
    headers: {
  "Content-Type": "application/json"
},
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }

  return response.json();
};
