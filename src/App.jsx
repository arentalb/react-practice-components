import { flashcards } from "./data.js";
import { FlashCard } from "./FlashCard.jsx";

function App() {
  return (
    <div className={"flex flex-wrap gap-4 p-10 justify-center"}>
      {flashcards.map((flashcard) => (
        <FlashCard flashcard={flashcard} key={flashcard.id} />
      ))}
    </div>
  );
}

export default App;
