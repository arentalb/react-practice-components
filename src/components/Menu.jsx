import styles from "../App.module.css";
import { Button } from "@/components/ui/button.jsx";

export function Menu() {
  return (
    <nav
      className={`${styles.glass} col-span-1 glass rounded-lg p-4 flex items-center flex-col`}
    >
      <img
        src="../public/dollar.svg"
        alt="Description"
        className={"w-24 mb-10"}
      />
      <ul className={"flex flex-col gap-4 items-center w-20"}>
        <li>
          <Button className={"w-32"}>Transactions</Button>
        </li>
        <li>
          <Button className={"w-32"}>Report</Button>
        </li>
        <li>
          <Button className={"w-32"}>Add</Button>
        </li>
      </ul>
    </nav>
  );
}
