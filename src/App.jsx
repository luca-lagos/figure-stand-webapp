import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Register from "./routes/Register";
import Store from "./store/Store";
import Menu from "./components/Menu";
import Edit from "./routes/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Store>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />}/>
        <Route path="edit/:id" element={<Edit />}></Route>
      </Routes>
    </Store>
  );
}

export default App;
