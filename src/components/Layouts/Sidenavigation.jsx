import React, { useState, useContext } from 'react'
import './Sidenavigation.css'
import { NavLink } from 'react-router-dom'
import { FaSearch, FaRegCompass } from 'react-icons/fa';
import { HiOutlineDuplicate } from 'react-icons/hi';
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

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} className='logostyles'>
                    <img src='./icon/s.png' style={{ width: 30, height: 30, marginRight: 10 }} alt='logo' />
                    <h2>Shubham</h2>
                </div>
                <div className='ctrlNewThread' style={{ backgroundColor: "#fff", width: '70%', borderRadius: '20px', fontSize: '17px', padding: '7px', textAlign: 'center', fontWeight: 'bold', color: 'gray' }}>
                    New Thread <span style={{ border: "1px solid gray", padding: '0.5', borderRadius: '3px', marginRight: '1px' }}> CTR </span> <span style={{ border: "1px solid gray", padding: '1', borderRadius: '3px' }}> I </span>
                </div>
                <div style={{ width: '85%' }} >
                    <ul>
                        <NavLink to='/' activeClassName="active" ><li><FaSearch style={{ marginRight: '5px' }} />Home</li></NavLink>
                        <NavLink to='/contact' activeClassName="active"> <li><FaRegCompass style={{ marginRight: '5px' }} />Discover </li></NavLink>
                        {user ?
                            (<NavLink to='/Library' activeClassName="active"><li><HiOutlineDuplicate style={{ marginRight: '5px' }} />Library </li></NavLink>) : <li onClick={handleModal}><HiOutlineDuplicate style={{ marginRight: '5px' }} />Library </li>}
                        <li onClick={handleModal}><PiSignInBold style={{ marginRight: '5px' }} />SignIn</li>
                        {!user && <button onClick={handleModal} class={`custom-button `}>Signup</button>}

                    </ul>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'lightgray' }}>
                    Footer
                </div>
            </div>

        </>
    )
}

export default Sidenavigation