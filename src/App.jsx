import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import { Logo } from "./components/Logo.jsx";
import { Header } from "./components/Header.jsx";
import { Filter } from "./components/Filter.jsx";

function App() {
  return (
    <div>
      <div className={"grid grid-cols-8  "}>
        <div
          className={
            "col-span-1 flex justify-center items-center text-2xl border-b-2 border-r-2"
          }
        >
          <Logo />
        </div>

        <div className={"col-span-7 border-b-2"}>
          <Header />
        </div>

        <div className={"col-span-1  border-r-2"}>
          <Filter />
        </div>

        <div className={"col-span-7 min-h-[600px] flex flex-col p-8"}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate to={"products"} />} />
              <Route path={"/products"} element={<ProductsPage />} />
              <Route path={"/product"} element={<ProductPage />} />
              <Route path={"/cart"} element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
