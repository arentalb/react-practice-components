import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  function dec() {
    setValue((preValue) => preValue - 1);
  }

  function inc() {
    setValue((preValue) => preValue + 1);
  }

  function setFixedValue(e) {
    setValue(Number(e.target.value));
  }

  return (
    <div className={"flex justify-center items-center h-screen bg-green-50"}>
      <div>
        <h1 className={"text-center text-2xl mb-4"}>stepper</h1>
        <div className={"flex gap-4 items-center"}>
          <button
            className={" w-8 h-8 bg-gray-300 rounded-full text-2xl"}
            onClick={dec}
          >
            -
          </button>
          <input
            type="text"
            className={"border p-2 rounded-lg"}
            onChange={setFixedValue}
            value={value}
          />
          <button
            className={" w-8 h-8 bg-gray-300 rounded-full text-2xl"}
            onClick={inc}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
