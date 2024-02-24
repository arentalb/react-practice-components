import { Checkout } from "./Checkout.jsx";

export function CartDetail() {
  return (
    <div className="flex gap-6">
      {/* Cart Items Section */}
      <div className="w-2/3 flex flex-wrap gap-6 border-2 shadow-lg p-4 rounded-md">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      {/* Checkout Section */}
      <div className="w-1/3 flex flex-col gap-6 border-2 shadow-lg p-4 rounded-md">
        <Checkout />
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className="flex border-2 rounded-md shadow-lg p-4 w-full">
      {/* Product Image */}
      <div className="w-1/6">
        <img
          className="rounded-md w-full"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between ml-4">
        <h2 className="font-bold">The Name of the Shoe</h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
