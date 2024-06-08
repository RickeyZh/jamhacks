import "./App.css";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./Pages/Home";

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
