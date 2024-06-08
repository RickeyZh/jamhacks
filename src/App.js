import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Menu className="Nav">
        <MenuItem className="Item">Home</MenuItem>
        <SubMenu label="Data" className="Nav2">
          <MenuItem className="Item">Daily</MenuItem>
          <MenuItem className="Item">Daily</MenuItem>
          <MenuItem className="Item">Advice</MenuItem>
          <MenuItem className="Item">About</MenuItem>

        </SubMenu>
        <MenuItem>About</MenuItem>
      </Menu>
    </div>
  );
}
