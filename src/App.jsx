import styles from "./App.module.css";

function App() {
  return (
    <section
      className={`${styles.mainBackground}  h-screen w-screen flex justify-center items-center `}
    >
      <div className={"grid grid-cols-3 w-1/2 h-3/4 gap-4"}>
        <nav className={`${styles.glass} col-span-1 glass rounded-lg p-4`}>
          nav
        </nav>
        <main className={`${styles.glass}  col-span-2 glass rounded-lg p-4`}>
          main
        </main>
      </div>
    </section>
  );
}

export default App;
