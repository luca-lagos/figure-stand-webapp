import { Routes, Route, Link } from "react-router-dom";
import styles from "../assets/css/menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.item}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className={styles.item}>
            About
          </Link>
        </li>
        <li>
          <Link to="register" className={styles.item}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
