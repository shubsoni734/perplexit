import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Discover from "./components/Pages/Discover";
import Library from "./components/Pages/Library";
import React, { useState, useEffect } from "react";

import ThreadPopup from "./components/ThreadPopup";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SearchValue, setSearchValue] = useState("")

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "y") {
        setIsModalOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ThreadPopup open={isModalOpen} onCancel={handleModal} value={SearchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
