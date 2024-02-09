export function Tab({ children, color = "text-green-600 ", active }) {
  return (
    <button
      className={`${
        active ? "border-b-2" : ""
      } rounded-md text-lg font-semibold hover:bg-gray-200 hover:${color} px-4 py-2 flex items-center gap-2 transition-all duration-400 ${color} `}
    >
      {children}
    </button>
  );
}
