import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProductPage.jsx";
import { PricingPage } from "./pages/PricingPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { Drinks } from "./components/nested/Drinks.jsx";
import { Foods } from "./components/nested/Foods.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path={""} element={<HomePage />} />*/}
        <Route path={""} element={<HomePage />} />
        <Route path={"/products"} element={<ProductPage />}>
          {/*<Route index element={<Drinks />} />*/}
          <Route index element={<Navigate replace to={"foods"} />} />

          <Route path={"foods"} element={<Foods />} />
          <Route path={"drinks"} element={<Drinks />} />
        </Route>
        <Route path={"/pricing"} element={<PricingPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
// you can use index to set default component to be displayed
export default App;
