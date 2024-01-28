import { Link } from "react-router-dom";
import styles from "./AppNav.module.css";

export function PageNav() {
  return (
    <nav className={styles.nav}>
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
