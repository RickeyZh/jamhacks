
import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Menu className="Nav">
      <MenuItem component={<Link to="/Home" />} className="Item">Home</MenuItem>
      <SubMenu label="Data" className="Nav2">
        <MenuItem component={<Link to="/Current" />} className="Item">Current</MenuItem>
        <MenuItem component={<Link to="/Cumulative" />} className="Item">Cumulative</MenuItem>
        <MenuItem component={<Link to="/Visual" />} className="Item">Visual</MenuItem>
        <MenuItem component={<Link to="/Advice" />} className="Item">Advice</MenuItem>
      </SubMenu>
      <MenuItem component={<Link to="/About" />}> About</MenuItem>
    </Menu>

  );
}

export default Navbar;

