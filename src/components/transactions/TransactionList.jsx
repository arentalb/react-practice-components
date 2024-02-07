import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Transaction } from "@/components/transactions/Transaction.jsx";

export function TransactionList({ transactions }) {
  return (
    <div className={"flex flex-col min-w-80 gap-4"}>
      <ScrollArea className="h-[350px] w-[350px] rounded-md border py-4 px-4">
        {transactions.length === 0 ? (
          <div className={"flex justify-center text-2xl"}>
            <p>There is no transactions</p>
          </div>
        ) : (
          transactions.map((preTransaction) => (
            <Transaction transaction={preTransaction} key={preTransaction.id} />
          ))
        )}
      </ScrollArea>
    </div>
  );
}
