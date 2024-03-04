import { useShoe } from "../contexts/ShoeProvider.jsx";
import { useNavigate } from "react-router";

export function ProductList() {
  const { shoes, loading } = useShoe();

  return (
    <div className="container mx-auto mt-8">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-evenly gap-4">
          {shoes.length === 0 ? (
            <p className={"text-4xl"}>No Product Founded For this Filter </p>
          ) : (
            shoes.map((shoe) => <Product key={shoe.id} shoe={shoe} />)
          )}
        </div>
      )}
    </div>
  );
}

function Product({ shoe }) {
  const navigate = useNavigate();

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 p-4">
      <div className="h-48">
        <img
          className="rounded-md object-contain w-full h-full"
          src={shoe.img}
          alt=""
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{shoe.title}</h2>
        <p className="text-xs mb-2">⭐⭐⭐⭐⭐ {shoe.reviews}</p>
        <div className="flex justify-between items-center">
          <p className={"flex gap-2"}>
            <span className="line-through text-gray-500 ">
              ${shoe.prevPrice}
            </span>
            ${shoe.newPrice}
          </p>
          <button
            onClick={() => navigate(`/product/${shoe.id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
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
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
