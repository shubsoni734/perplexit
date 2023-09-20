import React, { useContext } from 'react'
import Layout from '../Layouts/Layout'
import { MyContext } from '../../context/userContext'

function Home() {
    const { user, setUser } = useContext(MyContext);
    return (
        <Layout>
            {user && <p>{JSON.stringify(user)}</p>}
            <div style={{ justifyContent: 'center', alignItems: 'center', fontSize: 300 }}>Home</div>
        </Layout>
    )
}

export default Home