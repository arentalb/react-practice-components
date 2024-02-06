import { ScrollArea } from "@/components/ui/scroll-area.jsx";
import { Transaction } from "@/components/transactions/Transaction.jsx";

export function TransactionList() {
  return (
    <div className={"flex flex-col min-w-80 gap-4"}>
      <ScrollArea className="h-[400px] w-[350px] rounded-md border p-4 ">
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </ScrollArea>
    </div>
  );
}
