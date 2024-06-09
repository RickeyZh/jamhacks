import LiveFeed from "../components/LiveFeed";
import "../App.css";
export default function Current() {
  return (
    <div className="content" style={{ backgroundColor: '#3d516e', minHeight: '100vh', padding: '0px' }}>
      <h1 style={{marginLeft:550}}>LIVE FEED</h1>
      <LiveFeed />
    </div>
  );
}
