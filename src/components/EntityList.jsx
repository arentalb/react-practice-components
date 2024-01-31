import { entities } from "../data/entities.js";
import { Entity } from "./Entity.jsx";
import { useState } from "react";

export function EntityList() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <div className="flex justify-center flex-wrap flex-row gap-2 bg-amber-300 px-12 py-6 relative">
        {Object.entries(entities).map(([entity, details]) => (
          <Entity
            characters={details.characters}
            entity={entity}
            setIsCopied={setIsCopied}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
      {isCopied && (
        <div className="fixed bottom-5 right-1/2 bg-gray-50 p-2 rounded-full">
          Copied!
        </div>
      )}
    </>
  );
}
