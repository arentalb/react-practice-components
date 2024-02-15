import {useReducer} from "react";

// Define action types outside the reducer for clarity
const ACTION_TYPES = {
  OPEN_ACCOUNT: "openAccount",
  CLOSE_ACCOUNT: "closeAccount",
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
  REQUEST_LOAN: "requestLoan",
  PAY_LOAN: "payLoan",
};

// Reducer function with focused logic for each action
function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.OPEN_ACCOUNT:
      return {
        ...state,
        balance: state.accountState === "open" ? state.balance : 500,
        accountState: "open",
      };

    case ACTION_TYPES.CLOSE_ACCOUNT:
      return {
        ...state,
        accountState: state.balance === 0 ? "close" : state.accountState,
      };

    case ACTION_TYPES.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload.amount,
      };

    case ACTION_TYPES.WITHDRAW:
      return {
        ...state,
        balance:
          state.balance - action.payload.amount >= 0
            ? state.balance - action.payload.amount
            : state.balance,
      };

    case ACTION_TYPES.REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        loan:
          state.balance >= action.payload.amount && state.loan === 0
            ? action.payload.amount
            : state.loan,
      };

    case ACTION_TYPES.PAY_LOAN:
      return {
        ...state,
        balance: state.balance + state.loan,
        loan: 0,
      };

    default:
      return state;
  }
}

function App() {
  const [{ accountState, balance, loan }, dispatch] = useReducer(reducer, {
    accountState: "close",
    balance: 0,
    loan: 0,
  });

  return (
    <div className={"flex justify-center items-center"}>
      <div className={"flex flex-col gap-4 items-center"}>
        <h1 className={"text-2xl"}> useReducer bank account </h1>
        <p className={"text-xl"}>balance : {balance}</p>
        <p className={"text-xl"}>loan : {loan}</p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          className={"px-4 py-2  shadow-md disabled:bg-gray-200"}
        >
          open Account
        </button>
        <button
          disabled={accountState === "close"}
          onClick={() => {
            dispatch({ type: "deposit", payload: { amount: 150 } });
          }}
          className={"px-4 py-2  shadow-md disabled:bg-gray-200"}
        >
          deposit 150
        </button>
        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: { amount: 50 } });
          }}
          disabled={accountState === "close"}
          className={"px-4 py-2  shadow-md disabled:bg-gray-200"}
        >
          withdrow 50
        </button>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan", payload: { amount: 500 } });
          }}
          disabled={accountState === "close"}
          className={"px-4 py-2  shadow-md disabled:bg-gray-200"}
        >
          request loan 500
        </button>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={accountState === "close"}
          className={"px-4 py-2  shadow-md disabled:bg-gray-200"}
        >
          pay loan
        </button>
        <button
          disabled={accountState === "close"}
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          className={"px-4 py-2  shadow-md disabled:bg-gray-200"}
        >
          close account
        </button>
      </div>
    </div>
  );
}

export default App;
