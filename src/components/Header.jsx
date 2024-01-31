export function Header() {
  return (
    <header
      className={"bg-amber-300 flex justify-center items-center p-8 flex-col"}
    >
      <p
        className={
          "text-6xl border-b-2 border-b-black border-dashed pb-2 uppercase mb-4"
        }
      >
        welcome to our space
      </p>
      <blockquote>
        <p className={"text-sm text-center"}>
          {'" Coding is the language of innovation, and developers are the '}
        </p>
        <p className={"text-sm text-center"}>
          {' poets shaping the future. "'}
        </p>
      </blockquote>
    </header>
  );
}
