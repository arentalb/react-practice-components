import { useState } from "react";

const colors = {
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  blue: "bg-blue-500",
  pink: "bg-pink-500",
  orange: "bg-orange-500",
  gray: "bg-gray-500",
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
      className={`p-4 rounded-full ${colors[color]}`}
    ></button>
  );

  return (
    <div className="relative text-gray-600">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between border items-center gap-6  text-gray-600 rounded-full px-4 py-2 hover:bg-gray-100"
      >
        <p className="text-lg">color</p>
        <div
          className={`${
            selectedColor === ""
              ? "bg-gradient-to-r from-teal-400 to-yellow-200"
              : colors[selectedColor]
          } p-3 border-2 border-white rounded-full`}
        ></div>
      </button>
      {isOpen && (
        <div className="absolute  flex flex-wrap gap-4 bg-white px-2 items-center justify-end py-4  rounded-lg border-2  z-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          {Object.keys(colors).map((color) => renderColorButton(color))}
        </div>
      )}
    </div>
  );
}
