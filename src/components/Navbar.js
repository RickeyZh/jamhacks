import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
 
function Navbar() {
  return (
    <Menu className="Nav">
      <MenuItem className="NavBarFont" component={<Link to="/"/>}>Home</MenuItem>
        <SubMenu label="Data" className="NavBarFont">
          <MenuItem className="NavBarFont" component={<Link to="/current"/>}>Current</MenuItem>
          <MenuItem className="NavBarFont" component={<Link to="/summary"/>}>Summary</MenuItem>
          <MenuItem className="NavBarFont" component={<Link to="/visual"/>}>Visual</MenuItem>
        </SubMenu>
      <MenuItem component={<Link to="/about"/>} className="NavBarFont">About</MenuItem>
    </Menu>
  )
}

export default Navbar;
