import {useReducer} from "react";

// Action types
const ACTIONS = {
  ADD_DIGIT: "addDigit",
  REMOVE_DIGIT: "removeDigit",
  CHOOSE_OPERATION: "chooseOperation",
  CLEAR: "clear",
  EVALUATE: "evaluate",
};

// Reducer function for state management
function reducer(state, { type, payload }) {
  switch (type) {
    // Block for handling digit addition
    case ACTIONS.ADD_DIGIT:
      // Check conditions for overwriting and zero handling
      if (state.overWrite === true) {
        return {
          ...state,
          currentOperand: payload.digit,
          overWrite: false,
        };
      }
      // Check to not enter multiple zeros
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      // Check and override if the value is zero and we enter a number
      if (state.currentOperand === "0") {
        return {
          ...state,
          currentOperand: payload.digit,
        };
      }
      // Check to not enter more than one period (.)
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    // Block for choosing operations
    case ACTIONS.CHOOSE_OPERATION:
      // Check conditions for choosing operation
      if (state.currentOperand === null && state.previousOperand === null) {
        console.log("CHOOSE_OPERATION");
        return state;
      }
      // Update state based on current and previous operands
      if (state.currentOperand === null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand === null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    // Block for clearing the calculator state
    case ACTIONS.CLEAR:
      return {
        currentOperand: null,
        previousOperand: null,
        operation: null,
      };

    // Block for removing a digit
    case ACTIONS.REMOVE_DIGIT:
      // Handle overwriting and removing digits
      if (state.overWrite) {
        return {
          ...state,
          overWrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand === null) return state;
      if (state.currentOperand.length === 1)
        return {
          ...state,
          currentOperand: null,
        };

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    // Block for evaluating the expression
    case ACTIONS.EVALUATE:
      // Check conditions for evaluation
      if (
        state.operation === null ||
        state.currentOperand === null ||
        state.previousOperand === null
      ) {
        return state;
      }
      return {
        ...state,
        previousOperand: null,
        overWrite: true,
        operation: null,
        currentOperand: evaluate(state),
      };

    // Default case
    default: {
      console.log("default");
    }
  }
}

// Function to evaluate the expression
function evaluate({ currentOperand, previousOperand, operation }) {
  const curent = parseFloat(currentOperand);
  const previous = parseFloat(previousOperand);
  if (isNaN(curent) || isNaN(previous)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = curent + previous;
      console.log("+");
      break;

    case "-":
      computation = curent - previous;
      break;

    case "/":
      computation = curent / previous;
      break;

    case "*":
      computation = curent * previous;
      break;
  }
  return computation.toString();
}

// Calculator component using React hooks and state management
export function Calculator() {
  // Initialize state using useReducer
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      currentOperand: null,
      previousOperand: null,
      operation: null,
    },
  );

  // Event handlers for calculator operations
  function operationHandler(operation) {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
  }

  function numberHandler(digit) {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  }

  function clearHnadler() {
    dispatch({ type: ACTIONS.CLEAR });
  }

  function evaluateHnadler() {
    dispatch({ type: ACTIONS.EVALUATE });
  }

  function deleteDigitHnadler() {
    dispatch({ type: ACTIONS.REMOVE_DIGIT });
  }

  // JSX for the Calculator component
  return (
    <div className={"shadow-2xl rounded-md border border-gray-400 p-2"}>
      <div
        className={
          "h-20 border-b-2 border-black flex flex-col  items-end justify-between "
        }
      >
        <p>
          {previousOperand} {operation}
        </p>
        <p className={"text-2xl mb-2"}> {currentOperand}</p>
      </div>
      <div className={" grid grid-cols-4 gap-4 p-4"}>
        <Button text={"AC"} size={"big"} onClick={clearHnadler} />
        <Button text={"DEL"} onClick={deleteDigitHnadler} />
        <Button text={"+"} onClick={operationHandler} />

        <Button text={"1"} onClick={numberHandler} />
        <Button text={"2"} onClick={numberHandler} />
        <Button text={"3"} onClick={numberHandler} />

        <Button text={"/"} onClick={operationHandler} />

        <Button text={"4"} onClick={numberHandler} />
        <Button text={"5"} onClick={numberHandler} />
        <Button text={"6"} onClick={numberHandler} />

        <Button text={"*"} onClick={operationHandler} />

        <Button text={"7"} onClick={numberHandler} />
        <Button text={"8"} onClick={numberHandler} />
        <Button text={"9"} onClick={numberHandler} />

        <Button text={"-"} onClick={operationHandler} />

        <Button text={"0"} onClick={numberHandler} />
        <Button text={"."} onClick={numberHandler} />

        <Button text={"="} size={"big"} onClick={evaluateHnadler} />
      </div>
    </div>
  );
}

// Button component for calculator buttons
function Button({ text, size, onClick }) {
  return (
    <button
      onClick={() => onClick(text)}
      className={`bg-blue-200 hover:bg-blue-300  min-w-14 h-14  rounded-md text-2xl ${
        size === "big" ? "col-span-2" : ""
      }`}
    >
      {text}
    </button>
  );
}
