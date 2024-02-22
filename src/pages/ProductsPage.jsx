import { Filter } from "../components/Filter.jsx";
import { Header } from "../components/Header.jsx";
import { Logo } from "../components/Logo.jsx";

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

        <div className={"col-span-1 border-r-2"}>
          <Filter />
        </div>

        <div className={"col-span-7 h-full bg-amber-300"}>content</div>
      </div>
    </div>
  );
}
