import { Routes, Route, Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="register">Register</Link>
      </li>
    </ul>
  );
}
