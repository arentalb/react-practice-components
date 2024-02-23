import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to={"products"} />} />
          <Route path={"/products"} element={<ProductsPage />} />
          <Route path={"/product"} element={<ProductPage />} />
          <Route path={"/cart"} element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
