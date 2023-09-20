import React from 'react'
import Sidenavigation from './Sidenavigation'
import './Layout.css'
function Layout({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <Sidenavigation />
            <main className="main-content">
                {children}
            </main>
        </div>
    )
}

export default Layout