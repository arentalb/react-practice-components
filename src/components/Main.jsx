import styles from "../App.module.css";
import { TransactionComponent } from "@/components/transactions/TransactionComponent.jsx";

export function Main() {
  return (
    <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
      <TransactionComponent />
    </main>
  );
}
