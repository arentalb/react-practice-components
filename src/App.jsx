import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product.jsx";
import { Pricing } from "./pages/Pricing.jsx";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<Home />} />
        <Route path={"products"} element={<Product />} />
        <Route path={"pricing"} element={<Pricing />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
