import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Discover from "./components/Pages/Discover";
import Library from "./components/Pages/Library";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Discover />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
