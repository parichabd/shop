import { createContext, useState, useEffect } from "react";
import api from "../Services/confing";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      {" "}
      <ProductsProvider.Provider>{children}</ProductsProvider.Provider>
    </div>
  );
}

export default ProductsProvider;
