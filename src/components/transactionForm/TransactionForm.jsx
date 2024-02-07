import { Selector } from "@/components/transactionForm/Selector.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { useState } from "react";

const selectorData1 = {
  label: "types",
  items: ["income", "expense"],
  message: "select a type",
};

const selectorData2 = {
  label: "category",
  items: [
    "Groceries",
    "Utilities",
    "Dining out",
    "Healthcare",
    "Transportation",
    "Rent",
  ],
  message: "select a category",
};

export function TransactionForm({ setTransactions }) {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [selectData, setSelectData] = useState(selectorData2);

  function handelTypeChange(e) {
    if (e === "expense") {
      setSelectData({
        ...selectData,
        items: [
          "Groceries",
          "Utilities",
          "Dining out",
          "Healthcare",
          "Transportation",
          "Rent",
        ],
      });
    }
    if (e === "income") {
      setSelectData({
        ...selectData,
        items: [
          "Freelance",
          "Bonus",
          "Salary",
          "Rental income",
          "Renting equipment",
        ],
      });
    }

    setType(e);
  }

  function handelCategoryChange(e) {
    console.log(e);
    setCategory(e);
  }

  function handelAmountChange(e) {
    console.log(e.target.value);
    setAmount(e.target.value);
  }

  function handleClick() {
    if (type === "" || category === "" || amount === 0) return;
    const newTransaction = {
      id: crypto.randomUUID(),
      type,
      category,
      amount,
    };
    setTransactions((preTarnsactions) => [...preTarnsactions, newTransaction]);
  }

  return (
    <div className={" flex justify-center  flex-col items-center"}>
      <h1 className={"text-center text-4xl mb-20"}>Add new transaction </h1>
      <div className={"mb-10 flex w-full justify-start "}>
        <Input type={"number"} onChange={handelAmountChange} />
      </div>
      <div className={"flex justify-between  w-full mb-8 "}>
        <Selector data={selectorData1} onValueChange={handelTypeChange} />
        <Selector data={selectData} onValueChange={handelCategoryChange} />
      </div>

      <div className={"flex justify-center"}>
        <Button onClick={handleClick}>add new transaction </Button>
      </div>
    </div>
  );
}
