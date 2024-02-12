import { Search } from "./Search.jsx";

export function Header({ onParamChange }) {
  return (
    <div className=" px-10 py-6 flex justify-center items-center  flex-col ">
      <h1 className={"text-5xl text-white my-10"}>
        Showcasing Our Creative Vision
      </h1>
      <Search onParamChange={onParamChange} />
    </div>
  );
}
