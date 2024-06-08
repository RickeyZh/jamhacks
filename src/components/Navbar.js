import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
 
function Navbar() {
  return (
    <Menu className="Nav">
      <MenuItem className="Item" component={<Link to="/"/>}>Home</MenuItem>
        <SubMenu label="Data" className="Nav2">
          <MenuItem className="Item" component={<Link to="/current"/>}>Current</MenuItem>
          <MenuItem className="Item" component={<Link to="/summary"/>}>Summary</MenuItem>
          <MenuItem className="Item" component={<Link to="/visual"/>}>Visual</MenuItem>
        </SubMenu>
      <MenuItem component={<Link to="/about"/>}>About</MenuItem>
    </Menu>
  )
}

export default Navbar;
