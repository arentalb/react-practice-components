import { Link } from "react-router-dom";

export function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={""}>home</Link>
        </li>
        <li>
          <Link to={"pricing"}>pricing</Link>
        </li>
        <li>
          <Link to={"products"}>product</Link>
        </li>
        {/*<li>*/}
        {/*  <NavLink to={"products"}>product</NavLink>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}
