import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Home page </h1>
      <Outlet />
    </div>
  );
}
