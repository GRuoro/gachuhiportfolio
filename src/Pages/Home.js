import React from 'react'
import Navbar from '../Components/Navbar'

import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <div>
        <section className="homePage">
            <Navbar/>
            <div className="hero">
                
                <div className="socialmedia">
                    <div className="github"></div>
                    <div className="linkedin"></div>
                    <div className="twitter"></div>
                    <div className="email"></div>
                    <div className="phone"></div>
                </div>
                
                <div className="mainContent">
                    <div className="heroTitle">
                        <h1>hey, i'm chris gachuhi</h1>
                    </div>
                    <div className="heroText">
                        <p>
                            A Frontend focused Web Developer building the Frontend of Websites and Web Applications
                             that leads to the success of the overall product
                        </p>
                    </div>
                    <Button>PROJECTS</Button>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Home