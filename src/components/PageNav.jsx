import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

export function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={""}>home</NavLink>
        </li>
        <li>
          <NavLink to={"pricing"}>pricing</NavLink>
        </li>
        <li>
          <NavLink to={"products"}>product</NavLink>
        </li>
        {/*<li>*/}
        {/*  <Link to={"products"}>product</Link>*/}
        {/*</li>*/}
        {/*it wont get active class to the selected or active url we are in it */}
      </ul>
    </nav>
  );
}
