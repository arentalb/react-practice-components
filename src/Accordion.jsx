import { useState } from "react";

export function Accordion({ accordion }) {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState((prevState) => !prevState);
  };

  return (
    <div
      onClick={handleToggle}
      className={`grid grid-cols-[auto,1fr,auto] gap-x-4 gap-y-6 w-[600px] shadow-lg text-gray-800 p-4 rounded-md ${
        toggleState ? "border-t-4 border-t-green-800" : ""
      }`}
    >
      <p
        className={`${toggleState ? "text-green-800" : ""} text-2xl font-bold`}
      >
        0{accordion.id}
      </p>
      <p
        className={`${
          toggleState ? "text-green-800" : ""
        } text-2xl font-semibold`}
      >
        {accordion.title}
      </p>
      <p className={`${toggleState ? "text-green-800" : ""} text-2xl`}>
        <ToggleIcon toggleState={toggleState} />
      </p>
      {toggleState && (
        <p className={"col-start-2 text-sm"}>{accordion.content}</p>
      )}
    </div>
  );
}

const ToggleIcon = ({ toggleState }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    {toggleState ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    )}
  </svg>
);
