import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Router>
      <div>
        <h1>OTT Platform</h1>
        <Routes>
        <VideoPlayer url="https://www.w3schools.com/html/mov_bbb.mp4" />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

