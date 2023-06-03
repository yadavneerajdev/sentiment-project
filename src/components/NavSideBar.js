import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const NavSideBar = () => {
    return (
        <div className='sidebar-wrapper'>
            <h2>SentiBee</h2>
            <Link to='/'>Home</Link>
            <Link to='/hero'>Hero</Link>
            <Link to='/user'>Classifiy</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/results'>Results</Link>
        </div>
    )
}

export default NavSideBar