import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <>
      Home component
      <div
        onClick={() => navigate("pricing")}
        style={{ backgroundColor: "red", width: "100px", height: "100px" }}
      ></div>
    </>
  );
}
