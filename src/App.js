import "./App.css";
import SidebarL from "./components/left_sidebar/SidebarL";
import SidebarR from "./components/sidebar_right/SidebarR";
import FeedBox from "./components/imgBox/FeedBox";
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SidebarL />
      </div>
      <div className="main">
        <FeedBox />
      </div>
      <div className="rightBar">
        <SidebarR />
      </div>
    </div>
  );
}

export default App;
