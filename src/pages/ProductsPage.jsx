import { Recommendation } from "../components/Recommendation.jsx";
import { ProductList } from "../components/ProductList.jsx";
import { Logo } from "../components/Logo.jsx";
import { Header } from "../components/Header.jsx";
import { Filter } from "../components/Filter.jsx";

export function ProductsPage() {
  return (
    <div className="">
      <div className={"flex justify-between px-10 border-b-2"}>
        <Logo />
        <Header />
      </div>

      <div className={"flex p-8 flex-col sm:flex-row"}>
        <div className={"min-w-36 sm:border-r-2"}>
          <Filter />
        </div>
        <div className={"w-full flex flex-col gap-6 pl-4"}>
          <Recommendation />
          <ProductList />
        </div>
      </div>
    </div>
  );
}
