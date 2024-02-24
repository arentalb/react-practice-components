import { ProductDetail } from "../components/ProductDetail.jsx";
import { Logo } from "../components/Logo.jsx";
import { Header } from "../components/Header.jsx";

export function ProductPage() {
  return (
    <div className={" "}>
      <div className={"flex justify-between px-10 border-b-2"}>
        <Logo />
        <Header />
      </div>

      <div className={"flex p-8 flex-col sm:flex-row"}>
        <div className={"w-full flex flex-col gap-6 "}>
          <ProductDetail />
        </div>
      </div>
    </div>
  );
}
