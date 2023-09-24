import React, { useState, useEffect } from 'react'
import Layout from '../Layouts/Layout'
import './Discover.css';
import { FaRegCompass, FaEye, FaShareAlt, FaRegThumbsUp } from 'react-icons/fa';

let data = [{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
{ heading: "hello how ", contant: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet necessitatibus vel qui aliquid. Rem nobis odit ratione esse amet itaque?", view: 2, share: 12, opration: 2 },
]
function Discover() {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) { setIsHeaderFixed(true); }
            else { setIsHeaderFixed(false); }
        };
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); };
    }, []);
    return (
        <Layout>
            <div style={{ width: '100%', }}>
                <div className={`header ${isHeaderFixed ? 'fixed' : ''}`}>
                    <h1><FaRegCompass size={30} style={{}} /> Discover </h1>
                </div>
                <div className="content">
                    {data.map((data, index) => (
                        <div style={{ paddingTop: "10px", paddingBottom: "10px", borderBottom: "1px solid lightgray" }}>
                            <div className='contantHeading'>
                                <p style={{ fontSize: '20px', color: '#gray', paddingBottom: '5px' }}>{data.heading}</p>
                                <p style={{ fontSize: 20, color: 'gray', padding: 0, margin: 0, paddingBottom: '3px' }}>{data.contant}</p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaEye size={15} className='icon' /><p>{data.view}</p>
                                <FaShareAlt size={15} className='icon' /><p>{data.share}</p>
                                <FaRegThumbsUp size={15} className='icon' /> <p>{data?.opration}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Discover