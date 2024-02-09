import { Header } from "./components/Header.jsx";
import { TaskBox } from "./components/TaskBox.jsx";
import { TimerBox } from "./components/TimerBox.jsx";

function App() {
  return (
    <>
      <header className={"sticky top-0 "}>
        <Header />
      </header>
      <main>
        <div>
          <TimerBox />
        </div>
        <div>
          <TaskBox />
        </div>
      </main>
    </>
  );
}

export default App;
