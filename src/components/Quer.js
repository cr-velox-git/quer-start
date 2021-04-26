import React from 'react'
import '../css/Quer.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


function quer() {
    return (
        <div className = 'quer'>
            <Navbar/>
            <div className = "quer_content">
                <Sidebar/>
                <Feed/>
            </div>
        </div>
    )
}

export default quer
