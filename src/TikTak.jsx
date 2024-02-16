import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "played":
      // eslint-disable-next-line no-case-declarations
      const currentUser = state.user === "aren" ? "ahmad" : "aren";
      // eslint-disable-next-line no-case-declarations
      const currentPlayerData = state[currentUser + "Data"];
      console.log(currentUser);
      console.log(checkWiner(currentPlayerData, currentUser));
      return {
        ...state,
        user: currentUser,
        whoWon: checkWiner(currentPlayerData, currentUser),
        [currentUser + "Data"]: [...currentPlayerData, action.payload],
      };
    default:
      return state;
  }
}

function checkWiner(data, user) {
  const possibilities = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const possibility of possibilities) {
    const isWinner = possibility.every((position) => data.includes(position));

    if (isWinner) {
      return user; // Player won
    }
  }

  return null; // No winning combination found
}

export function TikTak() {
  const [state, dispatch] = useReducer(reducer, {
    ahmadData: [],
    arenData: [],
    user: "aren",
    whoWon: null,
  });

  function chooseHandler(keyIndex) {
    dispatch({ type: "played", payload: Number(keyIndex) });
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-4">Tik Tak Toy game ⭕ & ❌</h1>
      <div className="grid grid-cols-3 border-2">
        {Array.from({ length: 9 }, (_, index) => (
          <Slot
            type={
              state.ahmadData.includes(index + 1)
                ? "x"
                : state.arenData.includes(index + 1)
                  ? "o"
                  : ""
            }
            key={index + 1}
            theIndex={index + 1}
            onChoose={chooseHandler}
          />
        ))}
      </div>
      {state.whoWon && <p>{state.whoWon} won!</p>}
    </div>
  );
}

function Slot({ type, onChoose, theIndex }) {
  return (
    <div
      onClick={() => onChoose(theIndex)}
      className="w-28 h-28 border-2 text-3xl flex justify-center items-center hover:bg-gray-100"
    >
      {type}
    </div>
  );
}
