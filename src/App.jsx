import { Accordion } from "./Accordion.jsx";
import { accordionData } from "./data.js";

function App() {
  return (
    <div className={"flex justify-center items-center mt-10"}>
      <div className={"space-y-4"}>
        {accordionData.map((acc) => (
          <Accordion accordion={acc} key={acc.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
