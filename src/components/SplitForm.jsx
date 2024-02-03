import { Button } from "./Button.jsx";
import { useState } from "react";

export function SplitForm({ selectedFriend, onUpdateFriend }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendExpense = bill && myExpense ? bill - myExpense : "";
  const [whoPay, setWhoPay] = useState("me");

  function handleBill(e) {
    const value = Number(e.target.value);
    if (value < myExpense) return;
    if (value === "") {
      setMyExpense("");
    } else {
      setBill(value);
    }
  }

  function handleMyExpense(e) {
    const value = Number(e.target.value);
    if (value <= bill || e.target.value === "") {
      setMyExpense(value);
    }
    if (e.target.value === "") {
      setMyExpense("");
    }
  }

  function handleWhoPay(e) {
    setWhoPay(e.target.value);
  }

  function splitHandler() {
    let updatedFriend;

    if (whoPay === "me") {
      updatedFriend = {
        ...selectedFriend,
        balance: selectedFriend.balance + -friendExpense,
      };
    } else {
      updatedFriend = {
        ...selectedFriend,
        balance: selectedFriend.balance + myExpense,
      };
    }

    onUpdateFriend(updatedFriend);
  }

  return (
    <div className="w-[350px] flex flex-col gap-4 bg-blue-300 p-4 rounded-md ">
      <p className="text-center uppercase text-2xl">{`split it with ${selectedFriend.name}`}</p>
      <div className="flex items-center">
        <label htmlFor="bill">Bill value </label>
        <input
          value={bill || ""}
          onChange={handleBill}
          type="number"
          className="border-gray-200 border-2 rounded-md px-2 py-2 ml-auto"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="myExpense">Your expense</label>
        <input
          value={myExpense || ""}
          onChange={handleMyExpense}
          type="number"
          className="border-gray-200 border-2 rounded-md px-2 py-2 ml-auto"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="friendExpense">{selectedFriend.name} expense</label>
        <input
          value={friendExpense}
          disabled
          type="number"
          className="border-gray-200 border-2 rounded-md px-2 py-2 ml-auto"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="whoPay">Who is paying </label>
        <select
          value={whoPay}
          onChange={handleWhoPay}
          className="border-gray-200 border-2 rounded-md px-2 py-2 ml-auto"
        >
          <option value="me">Me</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
      </div>
      <div className="flex-shrink-0 ml-auto">
        <Button onClick={splitHandler}>Split Bill</Button>
      </div>
    </div>
  );
}
