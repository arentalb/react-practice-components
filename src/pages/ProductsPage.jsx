import { Filter } from "../components/Filter.jsx";
import { Header } from "../components/Header.jsx";
import { Logo } from "../components/Logo.jsx";
import { Recommendation } from "../components/Recommendation.jsx";
import { ProductList } from "../components/ProductList.jsx";

export function ProductsPage() {
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
          <Recommendation />
          <ProductList />
        </div>
      </div>
    </div>
  );
}
