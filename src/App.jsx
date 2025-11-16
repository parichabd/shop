import { Route, Routes, Navigate } from "react-router-dom";
import ProducsPage from "./Pages/ProducsPage";
import ProductsDeatils from "./Pages/ProductsDeatils";
import CheckoutPage from "./Pages/CheckoutPage";
import PageNotFount from "./Pages/PageNotFount";
import ProductsProvider from "./Context/ProductsContext";

function App() {
  return (
    <>
      <ProductsProvider>
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProducsPage />} />
          <Route path="/products/:id" element={<ProductsDeatils />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFount />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}

export default App;
