import { useState } from "react";

const colors = {
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

export function ColorFilter({ onParamChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setIsOpen(false);

    const isSameColor = color === selectedColor;
    const newColorParam = isSameColor ? "" : color;

    onParamChange({ colors: newColorParam });
    setSelectedColor(newColorParam);
  };

  const renderColorButton = (color) => (
    <button
      key={color}
      onClick={() => handleColorChange(color)}
      value={color}
      className={`p-3 rounded-full ${colors[color]}`}
    ></button>
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-32 bg-blue-500 text-white rounded-lg px-4 py-2"
      >
        <div
          className={`${
            selectedColor === ""
              ? "bg-gradient-to-r from-teal-400 to-yellow-200"
              : colors[selectedColor]
          } p-3 border-2 border-white rounded-full`}
        ></div>
        <p className="text-2xl">&#8595;</p>
      </button>
      {isOpen && (
        <div className="absolute flex flex-wrap gap-4 bg-white px-2 items-center justify-end py-4 right-0 rounded-lg top-16 z-10">
          {Object.keys(colors).map((color) => renderColorButton(color))}
        </div>
      )}
    </div>
  );
}
