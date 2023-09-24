import React, { useState, useEffect } from 'react'
// import { FaRegCompass, FaEye, FaShareAlt, FaRegThumbsUp } from 'react-icons/fa';
import Layout from '../Layouts/Layout'
import { Menu, Button, Dropdown } from 'antd';
import './Library.css'
import { HiOutlineDuplicate } from 'react-icons/hi';
import { IoMdAdd } from 'react-icons/io';
import { BsThreeDots } from 'react-icons/bs';
import ThreadPopup from '../ThreadPopup';
function Library() {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [SearchValue, setSearchValue] = useState("")
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) { setIsHeaderFixed(true); }
            else { setIsHeaderFixed(false); }
        };
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const menu = (
        <Menu>
            <Menu.Item key="1">Delete Thread</Menu.Item>
        </Menu>
    );
    return (
        <Layout>
            <ThreadPopup open={isModalOpen} onCancel={handleModal} value={SearchValue} onChange={(e) => setSearchValue(e.target.value)} />

            <div style={{ width: '100%', }}>
                <header className={`header ${isHeaderFixed ? 'fixed' : ''}`}>
                    <h1><HiOutlineDuplicate size={30} style={{ marginRight: '5px' }} /> Library </h1>
                </header>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', marginTop: '20px', width: '65%', borderBottom: '1px lightgray solid' }}>
                    <h2 style={{ display: 'flex', alignItems: 'center' }}>
                        <HiOutlineDuplicate size={30} style={{ marginRight: '5px' }} /> New Threads
                    </h2>
                    <div style={{ display: 'flex', alignItems: 'center', paddingTop: '20px' }}>
                        <Dropdown overlay={menu} placement="bottomRight" style={{}}>
                            <div style={{
                                display: 'flex', alignItems: 'center', border: "1px solid lightgray", padding: '1px', backgroundColor: "#f1f2f5", borderRadius: 5, marginRight: "5px"
                            }}>
                                <BsThreeDots size={25} />
                            </div>
                        </Dropdown>
                        <IoMdAdd size={25} onClick={handleModal} style={{ border: "1px solid lightgray", padding: '1px', backgroundColor: "#f1f2f5", borderRadius: 5 }} />
                    </div>
                </div>
            </div >
        </Layout >
    )
}

export default Library