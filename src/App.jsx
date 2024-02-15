import { Main } from "./components/Main.jsx";
import { Header } from "./components/Header.jsx";
import { Calculator } from "./components/Calculator.jsx";

function App() {
  return (
    <div className={" h-screen bg-gray-200 flex flex-col p-20"}>
      <Header />
      <Main>
        <Calculator />
      </Main>
    </div>
  );
}

export default App;
