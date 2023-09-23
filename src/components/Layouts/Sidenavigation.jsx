import React, { useState, useContext } from 'react'
import './Sidenavigation.css'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaRegCompass, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { TbDeviceMobileDown, TbLogout } from 'react-icons/tb';
import { PiSignInBold } from 'react-icons/pi';
import { Modal } from 'antd';
import { MyContext } from '../../context/userContext';
import { GoogleAuthProvider, auth } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { logoutUser } from '../../GenericFunction';
function Sidenavigation() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, setUser } = useContext(MyContext);
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const signup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const userToken = await result.user.getIdToken();
            localStorage.setItem("userData", JSON.stringify(result.user));
            localStorage.setItem("userToken", userToken);
            setUser(result.user);
            handleModal();
        } catch (e) {
            console.log("Error in login" + e);
        }
    };
    const logout = () => {
        logoutUser(setUser)
    }

    return (
        <>
            <Modal open={isModalOpen} onCancel={handleModal} footer={null} >
                <button onClick={signup}>Google Login</button>
                <button onClick={logout}>Logout</button>
            </Modal>

            <div className="navigation-bar" >

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '10px' }} className='logostyles'>
                    <img src='./icon/s.png' style={{ width: 30, height: 30, marginRight: 10 }} alt='logo' />
                    <h2>Shubham</h2>
                </div>
                <div className='ctrlNewThread' style={{ backgroundColor: "#fff", width: '90%', borderRadius: '20px', fontSize: '17px', padding: '7px', textAlign: 'center', fontWeight: 'bold', color: 'gray', marginBottom: '20px' }}>
                    New Thread <span style={{ border: "1px solid gray", padding: '0.5', borderRadius: '3px', marginRight: '1px' }}> CTRL </span> <span style={{ border: "1px solid gray", padding: '1', borderRadius: '3px' }}> Y </span>
                </div>
                <div style={{ width: '85%' }} >
                    <ul>
                        <NavLink to='/' activeClassName="active" ><li><FaSearch style={{ marginRight: '5px' }} />Home</li></NavLink>
                        <NavLink to='/contact' activeClassName="active"> <li><FaRegCompass style={{ marginRight: '5px' }} />Discover </li></NavLink>
                        {user ?
                            (<NavLink to='/Library' activeClassName="active"><li style={{ cursor: 'pointer' }} ><HiOutlineDuplicate style={{ marginRight: '5px' }} />Library </li></NavLink>) : <li style={{ cursor: 'pointer' }} onClick={handleModal}><HiOutlineDuplicate style={{ marginRight: '5px' }} />Library </li>}
                        <li style={{ cursor: 'pointer' }} onClick={user ? logout : handleModal}>{user ? <TbLogout style={{ marginRight: '5px' }} /> : <PiSignInBold style={{ marginRight: '5px' }} />}{user ? "Signout" : "SignIn"}</li>
                        {!user && <button onClick={handleModal} class={`custom-button `}>Signup</button>}

                    </ul>
                </div>
                <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <div style={{ width: "80%", display: 'flex', justifyContent: 'center', marginLeft: 10 }}>
                        <p style={{ color: 'gray' }}><span style={{ fontWeight: 'bold', color: "black" }} >Try Pro</span><br></br>
                            Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload more files.</p>
                    </div>
                    {user ? <div style={{ display: 'flex', alignItems: 'center', height: 40, width: "80%", marginLeft: 10, borderRadius: 50, marginBottom: 5 }} className='userDetails'>
                        <img src={user.photoURL} style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10, marginLeft: 5 }} />
                        <p>{user.displayName}</p>
                    </div> : null}
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: "100%" }} className='bottomDownload'>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: 20, height: 40, paddingRight: 10, paddingLeft: 10, borderRadius: 30, cursor: 'pointer' }}>
                            <TbDeviceMobileDown style={{ marginRight: '5px' }} /><p>Download</p>
                        </div>
                        {/* <div style={{ fontSize: 20, display: 'flex', justifyContent: 'space-evenly' }}> */}
                        <div style={{ padding: 7, borderRadius: 50, cursor: 'pointer' }}>
                            <FaInstagram />
                        </div>
                        <div style={{ padding: 7, borderRadius: 50, textAlign: 'center', cursor: 'pointer' }}>
                            <FaFacebookF />
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Sidenavigation