import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function App() {
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

export default App;
