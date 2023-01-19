import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Store from "./routes/Store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Store>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Store>
  );
}

export default App;
