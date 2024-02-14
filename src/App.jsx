import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return state - 1;
    case "inc":
      return state + 1;
    case "setFixedValue":
      return action.payload;
  }
}

function App() {
  const [value, dispatch] = useReducer(reducer, 0);

  function dec() {
    dispatch({ type: "dec" });
  }

  function inc() {
    dispatch({ type: "inc" });
  }

  function setFixedValue(e) {
    dispatch({ type: "setFixedValue", payload: Number(e.target.value) });
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
