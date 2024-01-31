import { useState } from "react";
import { StepsCard } from "./StepsCard.jsx";

const stepsMessage1 = [
  "👋 Greetings! Ready to dive into new features?",
  "🛠️ Update alert! Enhancements are now live!",
  "🚀 Launch day! Discover what's fresh and improved!",
  "🌟 Stellar progress! Keep pushing forward!",
  "📢 Announcement: Exciting events coming soon!",
  "🎯 Pro tip: Maximize productivity with keyboard shortcuts!",
];
const stepsMessage2 = [
  "👋 Hello there! Any questions on getting started?",
  "🚀 Launch day! Discover what's fresh and improved!",
  "🌈 Milestone reached! Your journey is remarkable!",
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  function handelClose() {
    setIsOpen(!isOpen);
  }

  function handelFinish() {
    setIsFinished(true);
  }

  return (
    <div className="relative">
      <button onClick={handelClose} className="text-4xl fixed top-4 right-4">
        &#10008;
      </button>
      {isOpen ? (
        <StepsCard
          message={stepsMessage1}
          previousBtn={"Come"}
          nextBtn={"Go"}
          btnColor="bg-green-400 "
          stepColor="bg-green-400 "
          stepPathColor="bg-green-300 "
        />
      ) : (
        ""
      )}
      {!isFinished ? (
        <StepsCard message={stepsMessage2} onFinish={handelFinish} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
