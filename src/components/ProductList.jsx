export function ProductList() {
  return (
    <div className={"flex flex-wrap justify-evenly gap-4"}>
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
      <Product data={"data"} />
    </div>
  );
}

function Product({ data }) {
  return (
    <div className={" w-64 border-2 shadow-lg p-4 rounded-md"}>
      <img
        className={"rounded-md"}
        srcSet={""}
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      <h2 className={"text-xl font-bold mb-2"}>the name of teh shose</h2>
      <p className={"text-xs mb-6"}>⭐⭐⭐⭐⭐ (123)reviews</p>
      <div className={"flex justify-between "}>
        <p>
          <span className={"line-through"}>120$</span> 100$
        </p>
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
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
