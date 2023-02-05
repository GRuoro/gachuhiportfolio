import React from 'react'
import { Link } from 'react-router-dom'

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
                    <li> <Link to="/"> Home </Link></li>
                    <li> <Link to="/About"> About </Link></li>
                    <li> <Link to="/Projects"> Projects </Link></li>
                    <li> <Link to="/Contact"> Contact </Link></li>
                </ul>
            </div>
        </navbar>
    </div>
  )
}

export default Navbar