import styles from "../App.module.css";
import { ReportComponent } from "@/components/report/ReportComponent.jsx";

export function Main() {
  return (
    <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
      <ReportComponent />
    </main>
  );
}
