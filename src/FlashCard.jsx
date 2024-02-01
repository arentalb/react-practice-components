import { useState } from "react";

export function FlashCard({ flashcard }) {
  const [isQuetionShowen, setIsQuetionShowen] = useState();

  function handelToggle() {
    setIsQuetionShowen(!isQuetionShowen);
  }

  return (
    <div
      onClick={handelToggle}
      className={`${
        isQuetionShowen ? "bg-red-300 " : "bg-blue-300 "
      } px-12 py-16 w-80 rounded-3xl text-center`}
    >
      {isQuetionShowen ? (
        <p>{flashcard.question}</p>
      ) : (
        <p>{flashcard.answer}</p>
      )}
    </div>
  );
}
