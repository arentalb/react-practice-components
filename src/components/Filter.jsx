import { useState } from "react";
import { useShoe } from "../contexts/ShoeProvider.jsx";

export function Filter() {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [color, setColor] = useState("all");
  const { filterShoes } = useShoe();

  function handleFilter() {
    filterShoes(
      getPriceRangeObject(price),
      getColorArray(color),
      getCategoryArray(category),
    );
  }

  function getPriceRangeObject(price) {
    switch (price) {
      case "100-125":
        return { min: 100, max: 125 };
      case "125-150":
        return { min: 125, max: 150 };
      default:
        return { min: undefined, max: undefined };
    }
  }

  function getColorArray(color) {
    return color === "all" ? null : [color];
  }

  function getCategoryArray(category) {
    return category === "all" ? null : [category];
  }

  return (
    <div className={"flex flex-wrap gap-10 mb-10  justify-between  sm:block"}>
      <CategoriesFilter setCategory={setCategory} category={category} />
      <PricesFilter setPrice={setPrice} price={price} />
      <ColorsFilter setColor={setColor} color={color} />
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white p-2 rounded-md mt-4"
      >
        Apply Filters
      </button>
    </div>
  );
}

function CategoriesFilter({ setCategory, category }) {
  function changeHandler(value) {
    console.log(value);
    setCategory(value);
  }

  return (
    <div>
      <h1 className={"text-2xl mb-2"}>Category</h1>
      <div className={"flex flex-col gap-1"}>
        <LabelRadio
          text={"all"}
          valueRadio={"all"}
          nameRadio={"category"}
          onChange={changeHandler}
          selected={category}
        />
        <LabelRadio
          text={"flats"}
          valueRadio={"flats"}
          nameRadio={"category"}
          onChange={changeHandler}
          selected={category}
        />
        <LabelRadio
          text={"sneakers"}
          valueRadio={"sneakers"}
          nameRadio={"category"}
          onChange={changeHandler}
          selected={category}
        />
      </div>
    </div>
  );
}

function PricesFilter({ setPrice, price }) {
  function changeHandler(value) {
    console.log(value);
    setPrice(value);
  }

  return (
    <div>
      <h1 className={"text-2xl mb-2"}>Price</h1>
      <div className={"flex flex-col gap-1"}>
        <LabelRadio
          text={"all"}
          valueRadio={"all"}
          nameRadio={"price"}
          onChange={changeHandler}
          selected={price}
        />
        <LabelRadio
          text={"100-125"}
          valueRadio={"100-125"}
          nameRadio={"price"}
          onChange={changeHandler}
          selected={price}
        />
        <LabelRadio
          text={"125-150"}
          valueRadio={"125-150"}
          nameRadio={"price"}
          onChange={changeHandler}
          selected={price}
        />
      </div>
    </div>
  );
}

function ColorsFilter({ setColor, color }) {
  function changeHandler(value) {
    console.log(value);
    setColor(value);
  }

  return (
    <div>
      <h1 className={"text-2xl mb-2"}>Color</h1>
      <div className={"flex flex-col gap-1"}>
        <LabelRadio
          text={"all"}
          valueRadio={"all"}
          nameRadio={"color"}
          onChange={changeHandler}
          selected={color}
        />
        <LabelRadio
          text={"red"}
          valueRadio={"red"}
          nameRadio={"color"}
          onChange={changeHandler}
          selected={color}
        />
        <LabelRadio
          text={"blue"}
          valueRadio={"blue"}
          nameRadio={"color"}
          onChange={changeHandler}
          selected={color}
        />
      </div>
    </div>
  );
}

function LabelRadio({ text, valueRadio, nameRadio, onChange, selected }) {
  return (
    <label className="flex items-center">
      <input
        type="radio"
        name={nameRadio}
        value={valueRadio}
        checked={selected === valueRadio}
        onChange={() => onChange(valueRadio)}
        className="mr-2 p-4 h-5 w-5" // Add padding to make the radio button bigger
      />
      {text}
    </label>
  );
}
