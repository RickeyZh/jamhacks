import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
