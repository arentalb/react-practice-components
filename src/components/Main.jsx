import styles from "../App.module.css";
import { TransactionComponent } from "@/components/transactions/TransactionComponent.jsx";
import { TransactionForm } from "@/components/transactionForm/TransactionForm.jsx";
import { ReportComponent } from "@/components/report/ReportComponent.jsx";
import { useState } from "react";

const data = [
  {
    id: 1,
    type: "income",
    category: "Salary",
    amount: 3000,
  },
  {
    id: 2,
    type: "expense",
    category: "Rent",
    amount: 1250,
  },
  {
    id: 3,
    type: "income",
    category: "Freelance",
    amount: 500,
  },
  {
    id: 4,
    type: "expense",
    category: "Groceries",
    amount: 2000,
  },
  {
    id: 5,
    type: "income",
    category: "Bonus",
    amount: 1000,
  },
  {
    id: 6,
    type: "expense",
    category: "Utilities",
    amount: 1500,
  },
  {
    id: 7,
    type: "income",
    category: "Salary",
    amount: 4000,
  },
  {
    id: 8,
    type: "expense",
    category: "Dining out",
    amount: 750,
  },
  {
    id: 9,
    type: "income",
    category: "Salary",
    amount: 1250,
  },
  {
    id: 10,
    type: "expense",
    category: "Healthcare",
    amount: 5000,
  },
  {
    id: 11,
    type: "income",
    category: "Salary",
    amount: 2000,
  },
  {
    id: 12,
    type: "expense",
    category: "Healthcare",
    amount: 3000,
  },
  {
    id: 13,
    type: "income",
    category: "Rental income",
    amount: 4000,
  },
  {
    id: 14,
    type: "expense",
    category: "Transportation",
    amount: 1000,
  },
  {
    id: 15,
    type: "income",
    category: "Rental income",
    amount: 3500,
  },
  {
    id: 16,
    type: "expense",
    category: "Transportation",
    amount: 120,
  },
  {
    id: 17,
    type: "income",
    category: "Rental income",
    amount: 350,
  },
  {
    id: 18,
    type: "expense",
    category: "Rent",
    amount: 200,
  },
  {
    id: 19,
    type: "income",
    category: "Renting equipment",
    amount: 250,
  },
  {
    id: 20,
    type: "expense",
    category: "Rent",
    amount: 30,
  },
];

export function Main({ activeTab }) {
  const [transactions, setTransactions] = useState(data);

  return (
    <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
      {activeTab === "Transactions" && (
        <TransactionComponent transactions={transactions} />
      )}
      {activeTab === "Report" && (
        <ReportComponent transactions={transactions} />
      )}
      {activeTab === "Form" && (
        <TransactionForm setTransactions={setTransactions} />
      )}
    </main>
  );
}
