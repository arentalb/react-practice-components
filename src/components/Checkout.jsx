export function Checkout() {
  return (
    <div className={"w-1/2"}>
      <h1 className={"text-5xl border-b border-b-gray-800 pb-4 mb-10"}>
        checkout
      </h1>
      <div className={"flex justify-between  mb-4 text-2xl"}>
        <p>total price </p>
        <p>1000</p>
      </div>
      <div className={"flex justify-between  mb-4 text-2xl"}>
        <p>discount </p>
        <p>1000</p>
      </div>
      <div className={"flex justify-between  mb-4 text-2xl"}>
        <p>final price </p>
        <p>1000</p>
      </div>
      <div
        className={
          "flex justify-center  mb-4 text-2xl border-t border-t-gray-800 "
        }
      >
        <button className={"px-4 py-2 bg-amber-400 rounded-md mt-4"}>
          process
        </button>
      </div>
    </div>
  );
}
