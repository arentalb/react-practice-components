export function TransactionSummery({ summery, type }) {
  return (
    <div className={"bg-[#0F172A] px-6 py-3 rounded-lg text-white"}>
      <p className={"mb-6"}>{type}</p>
      <p>{summery} IQD</p>
    </div>
  );
}
