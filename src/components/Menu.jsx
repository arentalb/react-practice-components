import styles from "../App.module.css";

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
      <ul>
        <li>transactions</li>
        <li>report</li>
        <li>Add</li>
      </ul>
    </nav>
  );
}
