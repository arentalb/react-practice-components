import { WeatherCard } from "./components/WeatherCard.jsx";
import { Button } from "./components/Button.jsx";
import { Input } from "./components/Input.jsx";

function App() {
  return (
    <div
      className={
        "bg-gradient-to-b  from-sky-300 to-indigo-900 h-screen flex justify-center items-center"
      }
    >
      <div className={"  flex flex-col gap-4"}>
        <div className={"p-4 border-2 border-amber-300 rounded-2xl flex gap-4"}>
          <Input />
          <Button />
        </div>
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
