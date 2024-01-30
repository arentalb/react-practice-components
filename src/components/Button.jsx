export function Button({ onRandom }) {
  return (
    <>
      <button
        onClick={onRandom}
        className={
          "px-5 py-2.5 bg-amber-300 rounded-2xl text-gray-900 uppercase hover:bg-amber-400"
        }
      >
        random
      </button>
    </>
  );
}
