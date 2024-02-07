import styles from "../App.module.css";
import { TransactionComponent } from "@/components/transactions/TransactionComponent.jsx";
import { TransactionForm } from "@/components/transactionForm/TransactionForm.jsx";
import { ReportComponent } from "@/components/report/ReportComponent.jsx";
import { useState } from "react";

export function Main({ activeTab }) {
  const [transactions, setTransactions] = useState([]);

  return (
    <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
      {activeTab === "Transactions" && <TransactionComponent />}
      {activeTab === "Report" && <ReportComponent />}
      {activeTab === "Form" && (
        <TransactionForm setTransactions={setTransactions} />
      )}
    </main>
  );
}
