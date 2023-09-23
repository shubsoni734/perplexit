import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Discover from "./components/Pages/Discover";
import Library from "./components/Pages/Library";
import React, { useState, useEffect } from "react";
import { Modal, Button, Input, Upload, Tag } from 'antd';
import { UploadOutlined, ArrowRightOutlined } from '@ant-design/icons'
const { TextArea } = Input;
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
      <Modal open={isModalOpen} closable={false} onCancel={handleModal} footer={null}>
        <div style={{ width: "95%", border: "1px solid gray", padding: 10, borderRadius: 10, }}>
          <TextArea placeholder="Ask anything..." autoSize style={{ border: "0", boxShadow: "none", fontSize: 17 }} onChange={(e) => setSearchValue(e.target.value)} value={SearchValue} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Upload>
              <Button icon={<UploadOutlined />}>File</Button>
            </Upload>
            {SearchValue == "" ? null : (<Button type="primary" shape="circle" icon={<ArrowRightOutlined />} />)}
          </div>
        </div>
      </Modal >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Discover />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </>
  );
}

export default App;
