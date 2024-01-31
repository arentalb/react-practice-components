export function Entity({ characters, entity, setIsCopied }) {
  const copyToClipboard = () => {
    writeClipboardText(entity).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  return (
    <div
      className={
        "text-xl w-10 h-10 text-center bg-blue-400 p-4 rounded-full flex items-center justify-center hover:scale-125 cursor-pointer"
      }
      onClick={copyToClipboard}
    >
      <input type="text" value={characters} className="hidden" readOnly />
      <p>{characters}</p>
    </div>
  );
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

// return (
//   <div>
//     {" "}
//     {Object.entries(a).map(([entity, details]) => (
//       <div key={entity}>
//         <p>Entity: {entity}</p>{" "}
//         <p>Codepoints: {details.codepoints.join(", ")}</p>
//         <p>Characters: {details.characters}</p>
//       </div>
//     ))}{" "}
//   </div>
// );
