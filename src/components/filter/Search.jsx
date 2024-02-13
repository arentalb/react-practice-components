import { useState } from "react";

export function Search({ onParamChange }) {
  const [search, setSearch] = useState("");

  function searchHandler() {
    onParamChange({ q: search });
  }

  return (
    <div className="flex items-center space-x-2">
      <input
        type="search"
        id="search"
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search"
        required
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={searchHandler}
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Search
      </button>
    </div>
  );
}
