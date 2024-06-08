import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Current" element={<Current/>} />
        <Route path="/Cumulative" element={<Cumulative/>} />
        <Route path="/Visual" element={<Visual/>} />
        <Route path="/Advice" element={<Advice/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
