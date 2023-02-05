import React from 'react'
import { Button } from 'react-bootstrap'
import Navbar from '../Components/Navbar'


function About() {
  return (
      <div>
          
        <section className='aboutPage'>
            <Navbar/>
            <div className="aboutTitle">
                <div className="aboutHeading">
                    <h2>about me</h2>
                </div>
                
                <div className="aboutDescription">
                    <p>
                        Here you will find more information about me, what I do, and my
                        current skills mostly in terms of programming and technology
                    </p>
                </div>
            </div>
            
            <div className="aboutContent">
                <div className="aboutText">
                    <h3>get to know me</h3>
                    <p>
                    I'm a Frontend Web Developer building the Front-end of Websites and Web 
                    Applications that leads to the success of the overall product. Check out 
                    some of my work in the Projects section.
                    </p>
                    <p>
                    I also like sharing content related to the stuff that I have learned over 
                    the years in Web Development so it can help other people of the Dev Community.
                     Feel free to Connect or Follow me on my Linkedin where I post useful content 
                     related to Web Development and Programming.
                    </p>
                    <p>
                    I'm open to Job opportunities where I can contribute, learn and grow. 
                    If you have a good opportunity that matches my skills and experience 
                    then don't hesitate to contact me. 
                    </p>
                    <Button>contact me</Button>
                </div>
                
                <div className="aboutSummary">
                    <h3>My Skills</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>GIT</li>
                        <li>React JS</li>
                        <li>Terminal</li>
                        <li>Github</li>
                        <li>Bootstrap</li>
                        <li>Firebase</li>
                        <li>Web Hosting</li>
                        <li>Design Translation</li>
                        <li>Responsive Design</li>
                        <li>Machine Learning</li>
                    </ul>
                      {/* <iframe src={ "https://www.rammaheshwari.com/" }></iframe> */}
                </div>
            </div>
        </section>
        
          
    </div>
  )
}

export default About