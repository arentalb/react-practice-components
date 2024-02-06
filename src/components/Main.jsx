import styles from "../App.module.css";
// import {TransactionComponent} from "@/components/transactions/TransactionComponent.jsx";
import {TransactionForm} from "@/components/transactionForm/TransactionForm.jsx"; // import {ReportComponent} from "@/components/report/ReportComponent.jsx";

// import {ReportComponent} from "@/components/report/ReportComponent.jsx";

export function Main() {
  return (
    <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
      {/*<TransactionComponent />*/}
      {/*<ReportComponent/>*/}
      <TransactionForm />
    </main>
  );
}
