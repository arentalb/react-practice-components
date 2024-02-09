import { Tab } from "./Tab.jsx";
import CircularTimer from "./Timer.jsx";

export function TimerBox() {
  return (
    <div>
      <p className={"font-bold text-xl text-center mb-12"}>
        Why dont you take a challenge? 😏
      </p>
      <div className={"flex flex-col justify-center items-center"}>
        <div className={"flex justify-center items-center mb-10"}>
          <Tab color={"text-blue-600"} active={true}>
            pomodoro 0
          </Tab>
          <Tab>rest 0</Tab>
          <Tab>long rest 0</Tab>
        </div>

        <div className="container mx-auto">
          <CircularTimer
            totalTime={60}
            size="w-64 h-64"
            timerColor="bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
