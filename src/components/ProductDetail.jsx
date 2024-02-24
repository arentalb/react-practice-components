import { useEffect } from "react";
import { useShoe } from "../contexts/ShoeProvider.jsx";
import { useParams } from "react-router";

export function ProductDetail() {
  const { getShoeById, selectedShoe } = useShoe();
  const par = useParams();

  useEffect(function () {
    getShoeById(par.id);
  }, []);

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

        <p className="text-2xl mb-5">
          <span className="line-through text-gray-500">
            $ {selectedShoe.newPrice}
          </span>{" "}
          {selectedShoe.prevPrice}
        </p>

        <div className="mt-auto flex gap-4">
          <button className="px-4 py-2 bg-amber-400 rounded-md hover:bg-amber-500">
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
