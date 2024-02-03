export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={"px-3 py-1.5 rounded-lg bg-amber-300 hover:bg-amber-400"}
    >
      {children}
    </button>
  );
}
