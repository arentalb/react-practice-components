import { Link } from "react-router-dom";

export function Foods() {
  return (
    <>
      Foods component
      <Link to={`1`}>send food 1 </Link>
      <Link to={`2`}>send food 2 </Link>
      <Link to={`3`}>send food 3 </Link>
    </>
  );
}
