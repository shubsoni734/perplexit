import React from 'react'
import './Sidenavigation.css'
import { NavLink } from 'react-router-dom'
function Sidenavigation() {
    return (
        <>
            <div className="navigation-bar">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }} className='logostyles'>
                    <img src='./icon/s.png' style={{ width: 30, height: 30, marginRight: 10 }} alt='logo' />
                    <h2>Shubham</h2>
                </div>
                <div className='ctrlNewThread' style={{ backgroundColor: "#fff", width: '70%', borderRadius: '20px', fontSize: '17px', padding: '7px', textAlign: 'center', fontWeight: 'bold', color: 'gray' }}>
                    New Thread <span style={{ border: "1px solid gray", padding: '0.5', borderRadius: '3px', marginRight: '1px' }}> CTR </span> <span style={{ border: "1px solid gray", padding: '1', borderRadius: '3px' }}> I </span>
                </div>
                <div style={{ width: '85%' }} >
                    <ul>
                        <li>
                            <NavLink to='/' activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li><NavLink to='/contact' activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
                <div>
                    footer
                </div>
            </div>
        </>
    )
}

export default Sidenavigation