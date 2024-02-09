import { MdDashboardCustomize } from "react-icons/md";

export function Header() {
  return (
    <div className={"px-4 py-8 flex justify-between items-center"}>
      <p className={"uppercase font-bold text-2xl"}>pomodoro</p>
      <div>
        <button
          className={
            "rounded-md  hover:bg-gray-200 hover:text-blue-600 px-4 py-2 flex items-center gap-2 transition-all duration-400"
          }
        >
          <MdDashboardCustomize className={"text-xl"} />

          <span className={"hidden sm:flex"}>customize</span>
        </button>
      </div>
    </div>
  );
}
