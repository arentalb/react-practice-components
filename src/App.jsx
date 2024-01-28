import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage.jsx";
import { PricingPage } from "./pages/PricingPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<HomePage />} />
        <Route path={"products"} element={<ProductPage />} />
        <Route path={"pricing"} element={<PricingPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
