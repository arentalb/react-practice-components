import { TransactionSummery } from "@/components/transactions/TransactionSummery.jsx";
import { TransactionList } from "@/components/transactions/TransactionList.jsx";

export function TransactionComponent({ transactions }) {
  const expenseSummery = getSummery(transactions, "expense");

  const incomeSummery = getSummery(transactions, "income");

  return (
    <div className={" flex justify-center  flex-col items-center "}>
      <div className={"flex justify-around w-full mb-10"}>
        <TransactionSummery type={"expense"} summery={expenseSummery} />
        <TransactionSummery type={"income"} summery={incomeSummery} />
      </div>

      <div>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

function getSummery(arrayOfObjects, type) {
  return arrayOfObjects.reduce((accumulator, currentObject) => {
    // Check if the type is "expense" before adding to the accumulator
    if (currentObject.type === type) {
      // Convert amount to a number and add it to the accumulator
      return accumulator + parseInt(currentObject.amount, 10);
    } else {
      // If the type is not "expense", just return the accumulator unchanged
      return accumulator;
    }
  }, 0);
}
