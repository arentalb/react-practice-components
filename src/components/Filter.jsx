import { useState } from "react";

export function Filter() {
  return (
    <div className={"flex flex-col p-8 gap-6 "}>
      <CategoriesFilter />
      <PricesFilter />
      <ColorsFilter />
    </div>
  );
}

function CategoriesFilter() {
  const [selectedValue, setSelectedValue] = useState("allCategory");

  function changeHandler(value) {
    console.log(value);
    setSelectedValue(value);
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
          selected={selectedValue}
        />
        <LabelRadio
          text={"flat"}
          valueRadio={"flat"}
          nameRadio={"category"}
          onChange={changeHandler}
          selected={selectedValue}
        />
        <LabelRadio
          text={"sneakers"}
          valueRadio={"sneakers"}
          nameRadio={"category"}
          onChange={changeHandler}
          selected={selectedValue}
        />
      </div>
    </div>
  );
}

function PricesFilter() {
  const [selectedValue, setSelectedValue] = useState("all");

  function changeHandler(value) {
    console.log(value);
    setSelectedValue(value);
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
          selected={selectedValue}
        />
        <LabelRadio
          text={"0-50"}
          valueRadio={"0-50"}
          nameRadio={"price"}
          onChange={changeHandler}
          selected={selectedValue}
        />
        <LabelRadio
          text={"50-100"}
          valueRadio={"50-100"}
          nameRadio={"price"}
          onChange={changeHandler}
          selected={selectedValue}
        />
      </div>
    </div>
  );
}

function ColorsFilter() {
  const [selectedValue, setSelectedValue] = useState("all");

  function changeHandler(value) {
    console.log(value);
    setSelectedValue(value);
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
          selected={selectedValue}
        />
        <LabelRadio
          text={"red"}
          valueRadio={"red"}
          nameRadio={"color"}
          onChange={changeHandler}
          selected={selectedValue}
        />
        <LabelRadio
          text={"blue"}
          valueRadio={"blue"}
          nameRadio={"color"}
          onChange={changeHandler}
          selected={selectedValue}
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
