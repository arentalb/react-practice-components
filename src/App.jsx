import { flashcards } from "./data.js";
import { FlashCard } from "./FlashCard.jsx";
import { useState } from "react";

function App() {
  const [shownIndex, setShownIndex] = useState(-1);

  function handelToggle(index) {
    if (index === shownIndex) {
      setShownIndex(-1);
      return;
    }
    setShownIndex(index);
  }

  return (
    <div className={"flex flex-wrap gap-4 p-10 justify-center"}>
      {flashcards.map((flashcard) => (
        <FlashCard
          flashcard={flashcard}
          handelToggle={handelToggle}
          showenIndex={shownIndex}
          key={flashcard.id}
        />
      ))}
    </div>
  );
}

export default App;
