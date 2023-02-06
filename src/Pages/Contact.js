import { React, useRef }  from 'react'

import Navbar from '../Components/Navbar';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel';


import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

function Contact() {
    const emailRef = useRef()
    const nameRef = useRef();
    const messageRef = useRef();

    function submit() {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const comment = messageRef.current.value;

        const templateParams = {
            from_name: name,
            reply_to: email,
            message: comment
        };
    
        emailjs.send('service_70o8tvl', 'template_p52oy2p', templateParams,'RRkye2MWgbsfhUjO2')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            swal("Message Sent!", "I'll get back to you soon", "success");
            
                // insert FORM RESET
                
            }, function(error) {
            console.log('FAILED...', error);
            });
    }

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
                      <Form.Control ref={nameRef} type="text" placeholder="name" style={{ height: '60px' }}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                      <Form.Control ref={emailRef}type="email" placeholder="name@example.com" style={{ height: '60px' }}/>
                </FloatingLabel>
                
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                      <Form.Control as="textarea" ref={messageRef} placeholder="Leave a comment here" style={{ height: '200px' }}/>
                </FloatingLabel>
                
                <Button onClick={submit}>SUBMIT</Button>
            </div>
          </div>

    </div>
  )
}

export default Contact