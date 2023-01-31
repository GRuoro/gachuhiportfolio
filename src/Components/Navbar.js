import React from 'react'

function Navbar() {
  return (
    <div>
        <navbar className="navbar">
            <div className="userDetails">
                <div className="userImage"></div>
                <div className="userName">CHRIS JOHN GACHUHI</div>
            </div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </navbar>
    </div>
  )
}

export default Navbar