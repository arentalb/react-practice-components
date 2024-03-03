import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import { ShoeProvider } from "./contexts/ShoeProvider.jsx";
import { CartProvider } from "./contexts/CartProvider.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ShoeProvider>
          <CartProvider>
            <Routes>
              <Route index element={<Navigate to={"products"} />} />
              <Route path={"/products"} element={<ProductsPage />} />
              <Route path={"/product/:id"} element={<ProductPage />} />
              <Route path={"/cart"} element={<CartPage />} />
            </Routes>
          </CartProvider>
        </ShoeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
