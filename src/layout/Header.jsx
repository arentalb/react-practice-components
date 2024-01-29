import styel from "./Header.module.css";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <nav className={styel.nav}>
      <ul>
        <li>
          <Link to={"/"} className={styel.link}>
            home
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/about"} className={styel.link}>
            about
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/contact"} className={styel.link}>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
