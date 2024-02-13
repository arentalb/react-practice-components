export function ImageCard({ item, setSelectedCard, selectedCard }) {
  return (
    <div
      className={`${
        selectedCard === item.id ? "opacity-95 " : " "
      } rounded-lg  relative`}
    >
      <img
        onClick={() => {
          if (selectedCard === item.id) {
            setSelectedCard(null);
            return;
          }
          setSelectedCard(item.id);
        }}
        src={item?.webformatURL}
        alt=""
        className={"w-full object-cover rounded-md"}
      />

      {selectedCard === item.id ? (
        <div className="p-4 bg-green-100 rounded-md mt-2 `">
          <div>
            <p>tags: {item.tags}</p>
            <p>downloads :{item.downloads}</p>
            <p>likes: {item.likes}</p>
            <p>comments: {item.comments}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
