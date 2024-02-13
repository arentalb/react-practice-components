import { Header } from "./components/filter/Header.jsx";
import { useEffect, useRef, useState } from "react";
import { Main } from "./components/Main.jsx";

function App() {
  const [gallery, setGallery] = useState([]);
  const pageNumber = useRef(1);

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

  function loadMore() {
    pageNumber.current += 1;

    //we can not get image if teh page is greater than 11

    async function getImages() {
      const res = await fetch(
        generateApiUrl({ ...searchParams, page: pageNumber.current }),
      );
      const data = await res.json();

      setGallery(() => [...gallery, ...data.hits]);
    }

    getImages();
  }

  useEffect(
    function () {
      async function getImages() {
        const res = await fetch(generateApiUrl(searchParams));
        const data = await res.json();
        setGallery(data.hits);
      }

      pageNumber.current = 1;

      getImages();
    },
    [searchParams],
  );

  return (
    <div
      className={
        " min-h-screen "
        // bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      }
    >
      <Header onParamChange={handleSearchParamsChange} />
      <Main gallery={gallery} loadMore={loadMore} />
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
