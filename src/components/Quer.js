import React from 'react'
import '../css/Quer.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widget from './Widget'


function quer() {
    return (
        <div className = 'quer'>
            <Navbar/>
            <div className = "quer_content">
                <Sidebar/>
                <Feed/>
                <Widget/>
            </div>
        </div>
    )
}

export default quer
