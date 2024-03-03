import { useEffect, useState } from "react";
import { useShoe } from "../contexts/ShoeProvider.jsx";
import { useNavigate, useParams } from "react-router";
import { useCart } from "../contexts/CartProvider.jsx";

export function ProductDetail() {
  const { getShoeById, selectedShoe } = useShoe();
  const { addCartItem } = useCart();

  const par = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  useEffect(function () {
    getShoeById(par.id);
  }, []);

  function addNewItem(shoe) {
    const { id, title, img, newPrice } = shoe;

    const newObject = {
      id,
      title,
      quantity,
      img,
      newPrice,
    };
    addCartItem(newObject);
  }

  function add() {
    setQuantity((qua) => qua + 1);
  }

  function sub() {
    if (quantity <= 1) return;
    setQuantity((qua) => qua - 1);
  }

  return (
    <div className="flex flex-col border-2 shadow-lg p-4 rounded-md sm:flex-row">
      <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
        <img
          className="rounded-md w-full h-48 object-contain mx-auto"
          src={selectedShoe.img}
          alt=""
        />
      </div>

      <div className="flex flex-col sm:w-1/2 sm:pl-6">
        <h2 className="text-3xl font-bold mb-6">{selectedShoe.title}</h2>

        <p className="mb-2">⭐⭐⭐⭐⭐ {selectedShoe.reviews}</p>

        <div className="mb-4">
          <p
            className={
              "px-2.5 py-1.5 rounded-md bg-amber-400 max-w-min text-sm"
            }
          >
            {selectedShoe.company}
          </p>
        </div>
        <p className="mb-2">{selectedShoe.description}</p>

        <p className="text-2xl mb-5 flex gap-2">
          <span className="line-through text-gray-500">
            ${selectedShoe.prevPrice}
          </span>
          ${selectedShoe.newPrice}
        </p>
        <div className="mt-auto flex gap-4  items-center mb-5">
          <button
            onClick={sub}
            className={
              "p-5 rounded-md bg-amber-200 h-4 w-4 flex items-center justify-center "
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={add}
            className={
              "p-5 rounded-md bg-amber-200 h-4 w-4 flex items-center justify-center"
            }
          >
            +
          </button>
        </div>

        <div className="mt-auto flex gap-4">
          <button
            onClick={() => {
              addNewItem(selectedShoe);
              navigate("/products");
            }}
            className="px-4 py-2 bg-amber-400 rounded-md hover:bg-amber-500"
          >
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-amber-400 rounded-md hover:bg-amber-500">
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
