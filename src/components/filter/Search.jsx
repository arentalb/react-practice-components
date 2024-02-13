import { useState } from "react";

export function Search({ onParamChange }) {
  const [search, setSearch] = useState("");

  function searchHandler() {
    onParamChange({ q: search });
  }

  return (
    <div className="flex items-center space-x-2   ">
      <input
        type="search"
        id="search"
        className="border px-4 py-3  rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={searchHandler}
        type="submit"
        className="bg-blue-500 text-white  rounded-full px-6  py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Search
      </button>
    </div>
  );
}
