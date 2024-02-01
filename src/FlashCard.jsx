export function FlashCard({ flashcard, handelToggle, showenIndex }) {
  return (
    <div
      onClick={() => handelToggle(flashcard.id)}
      className={`${
        showenIndex === flashcard.id ? "bg-red-300 " : " bg-blue-300 "
      } px-12 py-16 w-80 rounded-3xl text-center`}
    >
      {showenIndex === flashcard.id ? (
        <p>{flashcard.answer}</p>
      ) : (
        <p>{flashcard.question}</p>
      )}
    </div>
  );
}
