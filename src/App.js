import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
