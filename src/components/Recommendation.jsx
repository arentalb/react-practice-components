export function Recommendation() {
  return (
    <div className={"mb-8"}>
      <h2 className={"text-2xl mb-4"}>Recomendation</h2>
      <div className={"flex gap-4"}>
        <Recommend text={"popular"} />
        <Recommend text={"new"} />
        <Recommend text={"best"} />
      </div>
    </div>
  );
}

function Recommend({ text }) {
  return (
    <button className={"px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200   "}>
      {text}
    </button>
  );
}
