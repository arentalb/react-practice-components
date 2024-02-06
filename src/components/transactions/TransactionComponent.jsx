import { TransactionSummery } from "@/components/transactions/TransactionSummery.jsx";
import { TransactionList } from "@/components/transactions/TransactionList.jsx";

export function TransactionComponent() {
  return (
    <div className={" flex justify-center  flex-col items-center"}>
      <div className={"flex justify-around w-full mb-8 "}>
        <TransactionSummery />
        <TransactionSummery />
      </div>

      <div>
        <TransactionList />
      </div>
    </div>
  );
}
