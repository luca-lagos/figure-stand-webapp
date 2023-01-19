import { Routes, Route, Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">
          <a href="/home">Home</a>
        </Link>
      </li>
      <li>
        <Link to="about">
          <a href="/about">About</a>
        </Link>
      </li>
      <li>
        <Link to="register">
        <a href="register">Register</a></Link>
      </li>
    </ul>
  );
}
