import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";
import { useEffect, useState } from "react";

function App() {
  const [gallery, setGallery] = useState([]);

  const [searchParams, setSearchParams] = useState({
    key: import.meta.env.VITE_API_KEY,
    q: "",
    lang: "en",
    id: "",
    image_type: "all",
    orientation: "all",
    category: "",
    min_width: 0,
    min_height: 0,
    colors: "",
    editors_choice: false,
    safesearch: false,
    order: "popular",
    page: 1,
    per_page: 50,
    callback: "",
    pretty: false,
  });

  const handleSearchParamsChange = (updatedParams) => {
    setSearchParams((prevParams) => ({ ...prevParams, ...updatedParams }));
  };

  useEffect(
    function () {
      async function getImages() {
        const res = await fetch(generateApiUrl(searchParams));
        const data = await res.json();
        setGallery(data);
      }

      getImages();
    },
    [searchParams],
  );

  return (
    <div
      className={
        " min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      }
    >
      <Header onParamChange={handleSearchParamsChange} />
      <Main gallery={gallery.hits} />
    </div>
  );
}

export default App;

const generateApiUrl = (params) => {
  const baseUrl = "https://pixabay.com/api/";
  const queryParams = Object.entries(params)
    .filter(
      ([key, value]) => value !== "" && value !== null && value !== undefined,
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");

  return `${baseUrl}?${queryParams}`;
};
