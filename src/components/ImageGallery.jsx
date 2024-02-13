import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard.jsx";

export function ImageGallery({ gallery, loadMore }) {
  const [splitGallery, setSplitGallery] = useState([]);
  const [selectedCard, setSelectedCard] = useState("");

  useEffect(
    function () {
      async function split() {
        setSplitGallery(splitArrayIntoThree(gallery, 3));
      }

      split();
    },
    [gallery],
  );
  return (
    <>
      <div className={"flex gap-4 relative"}>
        {splitGallery.map((arrayImage, index) => (
          <div className={"flex flex-col max-w-96 gap-4"} key={index}>
            {arrayImage.map((item) => (
              <ImageCard
                item={item}
                key={item.id}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
              />
            ))}
          </div>
        ))}
        <div
          className={
            " absolute w-full flex justify-center items-center bottom-0  h-96 " +
            "bg-gradient-to-b from-transparent to-gray-50  "
          }
        >
          <button
            onClick={loadMore}
            className={"hover:bg-gray-50  bg-white px-4 py-2 z-10 rounded-md"}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

function splitArrayIntoThree(arr) {
  const result = [[], [], []];
  let resultIndex = 0;

  for (let i = 0; i < arr?.length; i++) {
    result[resultIndex].push(arr[i]);
    resultIndex = (resultIndex + 1) % 3; // Cycle through array indices 0, 1, 2
  }

  return result;
}
