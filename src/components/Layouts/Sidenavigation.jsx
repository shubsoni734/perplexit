import React, { useState, useContext } from 'react'
import './Sidenavigation.css'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaRegCompass, FaInstagram, FaFacebookF, FaGoogle } from 'react-icons/fa';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { TbDeviceMobileDown, TbLogout } from 'react-icons/tb';
import { PiSignInBold } from 'react-icons/pi';
import { Modal, Button, Input } from 'antd';
import { MyContext } from '../../context/userContext';
import { GoogleAuthProvider, auth } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { logoutUser } from '../../GenericFunction';
import { DisplayContext } from '../../context/DisplayNameContext';
function Sidenavigation() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, setUser } = useContext(MyContext);
    const { displayName, setDisplayName } = useContext(DisplayContext);
    const [Register, setRegister] = useState(false);
    const [UserName, setUserName] = useState("")
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const signup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            if (result.user) {
                setRegister(true);
                setUserName(result.displayName)
            }
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
    const absoluteScreen = () => {
        setDisplayName({ displayuser: UserName });
        setRegister(false)
    }

    return (
        <>
            <Modal open={isModalOpen} onCancel={handleModal} footer={null} >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h1>Welcome</h1>
                    <p style={{ fontSize: 25, color: 'gray', marginBottom: '10px' }} >This is Assignment of Shubham Soni</p>
                    <div onClick={signup} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60%', fontSize: '20px', border: '1px solid lightgray', padding: '5px', borderRadius: 10, backgroundColor: 'lightgray' }}><FaGoogle size={20} style={{ marginRight: '8px' }} /> Login With Google</div>
                </div>
            </Modal>
            {Register ? <div style={{ position: 'absolute', width: '100%', height: "100vh", zIndex: 111, backgroundColor: "#f3f3ee", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '40%', height: '50vh', backgroundColor: '#fff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', borderBottom: '1px lightgray solid' }}>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <img src='./icon/s.png' style={{ width: '30px', marginRight: '5px' }} />
                            <p style={{ fontSize: '25px' }}>SignUp</p>
                        </div>
                        <Button disabled={UserName ? false : true} type="primary" onClick={absoluteScreen}>Continue</Button>
                    </div>
                    <h3 style={{ fontSize: '32px', margin: '10px', marginLeft: '30px' }}>Create Your Account</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start', marginTop: '20px', marginLeft: '50px' }}>
                        <p style={{ fontSize: '20px', color: 'gray', margin: "5px" }}>Avatar</p>
                        <img src={user.photoURL} style={{ borderRadius: 50, width: 70 }} />
                        <p style={{ fontSize: '20px', color: 'gray', margin: "5px" }}>UserName</p>
                        <Input placeholder='User Name' autoSize style={{ border: "1", fontSize: 25, width: '80%', fontWeight: 'bold' }} onChange={(e) => setUserName(e.target.value)} value={UserName} />
                    </div>
                </div>
            </div> : null}

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
                        <NavLink to='/discover' activeClassName="active"> <li><FaRegCompass style={{ marginRight: '5px' }} />Discover </li></NavLink>
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
                        <p>{displayName.displayuser}</p>
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