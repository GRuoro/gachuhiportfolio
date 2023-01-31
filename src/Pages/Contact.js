import React from 'react'
import Navbar from '../Components/Navbar'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Contact() {
  return (
    <div className = "contactPage">
        <Navbar/>
        <div className="contactTitle">
            <h3>contact</h3>
            <p>
                Feel free to Contact me by submitting the form below and I 
                will get back to you as soon as possible
            </p>
        </div>
        
        <div className="contactForm">
            <div className="contactDetails">
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                    <Form.Control type="text" placeholder="name" style={{ height: '60px' }}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" style={{ height: '60px' }}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '200px' }}/>
                </FloatingLabel>
                
                <Button>SUBMIT</Button>
            </div>
        </div>
    </div>
  )
}

export default Contact