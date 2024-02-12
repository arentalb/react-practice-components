import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState(
    `https://pixabay.com/api/?key=42295673-0684264417cf6981b5cb585df&per_page=200`,
  );
  return (
    <div className={" min-h-screen "}>
      <Header setUrl={setUrl} />
      <Main url={url} />
    </div>
  );
}

export default App;
