import { useParams } from "react-router-dom";

export function Detail() {
  const data = useParams();
  const { id } = data;
  return (
    <>
      <p>{`the ${id} is selected `}</p>
    </>
  );
}
