import { useParams, useSearchParams } from "react-router-dom";

export function Detail() {
  const data = useParams();
  const { id } = data;

  const [serachParam, setSearchParam] = useSearchParams();
  const lat = serachParam.get("lat");
  const lng = serachParam.get("lng");

  return (
    <>
      <p>{`the ${id} is selected `}</p>
      <p>teh queries are </p>
      <p>lat {lat}</p>
      <p>lng {lng}</p>
      <button
        onClick={() => {
          setSearchParam({ lat: "111", lng: "673" });
        }}
      >
        change the query{" "}
      </button>
    </>
  );
}
