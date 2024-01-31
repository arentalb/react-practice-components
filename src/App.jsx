import { data } from "./data.js";
import { Cart } from "./components/cart/Cart.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main
        className={
          "bg-amber-300 min-h-screen flex-wrap flex items-start gap-10 justify-center p-14"
        }
      >
        {data.map((user) => (
          <Cart user={user} key={user.id} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
