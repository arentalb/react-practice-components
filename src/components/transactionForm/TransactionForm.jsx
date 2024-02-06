import { Selector } from "@/components/transactionForm/Selector.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";

export function TransactionForm() {
  return (
    <div className={" flex  h-full flex-col p-10"}>
      <h1 className={"text-center text-4xl mb-20"}>Add new transaction </h1>
      <div className={"mb-10 flex w-full justify-start "}>
        <Input />
      </div>
      <div className={"flex justify-between  w-full mb-8 "}>
        <Selector />
        <Selector />
      </div>

      <div className={"flex justify-center"}>
        <Button>add new transaction </Button>
      </div>
    </div>
  );
}
