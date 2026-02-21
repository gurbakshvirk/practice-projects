import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./App.jsx";
import { ProductsProvider } from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <BrowserRouter>
    <App />
  </BrowserRouter>
    </ProductsProvider>
  </React.StrictMode>
);