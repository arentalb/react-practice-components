import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard.jsx";

export function ImageGallery({ url }) {
  const [gallery, setGallery] = useState([]);

  useEffect(
    function () {
      async function fetImage1() {
        const res = await fetch(url);
        const data = await res.json();
        setGallery(splitArrayIntoThree(data.hits, 3));
      }

      fetImage1();
    },
    [gallery],
  );
  return (
    <div className={"flex gap-4"}>
      {gallery.map((arrayImage, index) => (
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

  for (let i = 0; i < arr.length; i++) {
    result[resultIndex].push(arr[i]);
    resultIndex = (resultIndex + 1) % 3; // Cycle through array indices 0, 1, 2
  }

  return result;
}
