import React from 'react'
import Sidenavigation from './Sidenavigation'

function Layout({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <Sidenavigation />
            <main style={{
                flex: 1, marginLeft: '15.1%', margin: 2, minHeight: '97vh', backgroundColor: 'red', borderRadius: '10px'
            }}>
                {children}
            </main>
        </div >
    )
}

export default Layout