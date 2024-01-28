import { NavLink, Outlet } from "react-router-dom";

export function Product() {
  return (
    <>
      <div>Products component</div>
      <div>
        <ul>
          <li>
            <NavLink to={"foods"}>go to foods</NavLink>
            <NavLink to={"drinks"}>go to drinks</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
