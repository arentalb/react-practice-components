import { useCart } from "../contexts/CartProvider.jsx";
import { useNavigate } from "react-router";

export function CartDetail() {
  const { getCartItems, deleteCartItem } = useCart();

  const navigate = useNavigate();
  const subTotal = getCartItems().reduce((acc, cuu) => {
    return acc + Number(cuu.newPrice * cuu.quantity);
  }, 0);
  const delivery = 0;
  const total = subTotal + delivery;

  return (
    <div>
      <div className="flex flex-col min-h-screen ">
        {getCartItems().length > 0 ? (
          <>
            <header className="flex items-center justify-between h-16 bg-white shadow-sm border-b-2">
              <h1 className="text-xl font-medium px-4 ">My Shopping Cart</h1>
            </header>
            <main className="flex flex-col flex-grow p-4 overflow-y-auto">
              <section className="flex items-center justify-between border-b border-gray-200 pb-4">
                <h2 className="text-lg font-medium">Items</h2>
              </section>

              {getCartItems().map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  deleteCartItem={deleteCartItem}
                />
              ))}

              <section className="flex items-center justify-between border-b border-gray-200 py-4">
                <h2 className="text-lg font-medium">Subtotal</h2>
                <span className="text-gray-900 font-medium"> ${subTotal}</span>
              </section>
              <section className="flex items-center justify-between py-4">
                <h2 className="text-lg font-medium">Delivery</h2>
                <span className="text-gray-900 font-medium">
                  {delivery === 0 ? "Free" : delivery}
                </span>
              </section>
              <section className="flex items-center justify-between border-t border-gray-200 pt-4">
                <h2 className="text-lg font-medium">Total</h2>
                <span className="text-2xl font-semibold text-gray-900">
                  ${total}
                </span>
              </section>
            </main>
            <footer className="flex items-center justify-center py-4 bg-white shadow-sm">
              <button className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
                Checkout
              </button>
            </footer>
          </>
        ) : (
          <div className={"text-center "}>
            <h1 className={" text-4xl mb-4"}> No item in the cart </h1>
            <button
              onClick={() => navigate("/products")}
              className={"px-4 py-2 rounded-md bg-amber-400"}
            >
              return to main
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CartItem({ item, deleteCartItem }) {
  const totalEach = item.newPrice * item.quantity;
  return (
    <article className="flex py-4 border-b border-gray-200">
      <div className="flex-shrink-0 mr-4">
        <img
          className="w-24  min-h-10 rounded-sm"
          src={item.img}
          alt="Product image"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-base font-medium">{item.title}</h3>
        <span className="text-gray-500 text-sm">${item.newPrice}</span>
        <div className="flex items-center mt-4">
          <span className="text-gray-500 text-sm mr-4">
            Quantity: {item.quantity}
          </span>
          <button
            onClick={() => {
              deleteCartItem(item.id);
            }}
            className="text-gray-600 hover:text-gray-400 focus:outline-none"
          >
            Remove
          </button>
        </div>
      </div>
      <span className="ml-auto text-gray-900 font-medium">${totalEach}</span>
    </article>
  );
}
