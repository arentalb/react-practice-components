export function Avatar({ image }) {
  return (
    <div className={" p-4 mb-4   border-4 border-gray-700 rounded-md"}>
      <img
        className="object-cover object-top 	hover:scale-105 transition-transform	duration-300  w-60 h-60 rounded-md"
        src={image}
      />
    </div>
  );
}
