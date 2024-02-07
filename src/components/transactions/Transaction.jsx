export function Transaction({ transaction }) {
  return (
    <div
      className={`mb-4 bg-[#0F172A] border-r-4${
        transaction.type === "income"
          ? " border-r-green-600"
          : " border-r-red-600"
      } text-white py-2 px-2 rounded-lg`}
    >
      <div className={"flex justify-between mb-1 text-xs"}>
        <p> {transaction.category} </p>
        <p>
          {" "}
          {`${transaction.type === "income" ? "+" : "-"}${
            transaction.amount
          }`}{" "}
        </p>
      </div>
    </div>
  );
}
