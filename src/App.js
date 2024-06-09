import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Analysis from "./pages/Analysis";
import Visual from "./pages/Visual";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/visual" element={<Visual />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
