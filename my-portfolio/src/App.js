import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="App">
      <CodeIcon></CodeIcon>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <About></About>
      <CodeOffIcon></CodeOffIcon>
    </div>
  );
}

export default App;
