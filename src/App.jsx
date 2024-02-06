import styles from "./App.module.css";
import { Menu } from "./components/Menu.jsx";
import { Main } from "./components/Main.jsx";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Transactions");
  return (
    <section
      className={`${styles.mainBackground}  h-screen w-screen flex justify-center items-center `}
    >
      <div className={"grid grid-cols-3 w-1/2 h-3/4 gap-4"}>
        <Menu setActiveTab={setActiveTab} />
        <Main activeTab={activeTab} />
      </div>
    </section>
  );
}

export default App;
