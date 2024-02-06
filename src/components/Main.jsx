import styles from "../App.module.css";
import { MyPieChart } from "@/components/ui/MyPieChart.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import { ScrollArea } from "@/components/ui/scroll-area.jsx";

export function Main() {
  return (
    <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
      <div className={"h-60 flex justify-center mb-8"}>
        <MyPieChart />
      </div>
      <div>
        <div className={"flex justify-center gap-4 mb-8"}>
          <Button className={"w-24"}>income</Button>
          <Button className={"w-24"}>expense</Button>
        </div>
        <div className={" flex flex-col items-center  "}>
          <TransactionList />
        </div>
      </div>
    </main>
  );
}

function TransactionList() {
  return (
    <div className={"flex flex-col min-w-80 gap-4"}>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 ">
        <Transaction />
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

function Transaction() {
  return (
    <div className={"mb-4"}>
      <div className={"flex justify-between mb-1 text-xs"}>
        <p> gatgory name </p>
        <p>400000</p>
      </div>
      <Progress value={33} />
    </div>
  );
}
