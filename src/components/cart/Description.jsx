export function Description({ name, desc }) {
  return (
    <div>
      <h1 className={"text-4xl text-gray-800 mb-2"}>{name}</h1>
      <p className={"text-sm text-gray-600 mb-4"}>{desc}</p>
    </div>
  );
}
