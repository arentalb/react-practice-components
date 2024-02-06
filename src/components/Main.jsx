import styles from "../App.module.css";
import { MyPieChart } from "@/components/ui/MyPieChart.jsx";

export function Main() {
  return (
    <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
      <div className={"h-60 flex justify-center"}>
        <MyPieChart />
      </div>
    </main>
  );
}
