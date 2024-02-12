import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard.jsx";

export function ImageGallery({ gallery }) {
  const [splitGallery, setSplitGallery] = useState([]);

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
    <div className={"flex gap-4"}>
      {splitGallery.map((arrayImage, index) => (
        <div className={"flex flex-col max-w-96 gap-4"} key={index}>
          {arrayImage.map((item) => (
            <ImageCard item={item} key={item.id} />
          ))}
        </div>
      ))}
    </div>
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
