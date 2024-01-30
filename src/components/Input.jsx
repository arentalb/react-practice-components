export function Input({ onInter }) {
  return (
    <>
      <input
        onChange={(e) => onInter(e.target.value)}
        placeholder={"Iraq"}
        type="text"
        className={
          "p-2 rounded-2xl  placeholder:text-slate-400 placeholder:text-md " +
          " focus:outline-none focus:ring focus:ring-amber-300"
        }
      />
    </>
  );
}
