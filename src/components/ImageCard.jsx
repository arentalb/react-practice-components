export function ImageCard({ item }) {
  return (
    <div className={"bg-red-500 rounded-lg"}>
      <img
        src={item?.webformatURL}
        alt=""
        className={"w-full object-cover rounded-lg"}
      />
    </div>
  );
}
