import React from 'react'
import './Contact.css'
import { Button, Form } from 'react-bootstrap'



function Contact() {
  return (
    <>
    <div className='top container '>
  
  <h5 style={{color:"black",fontSize:"35px",fontWeight:"bold",marginLeft:"20px"}}>CONTACT ME</h5>  
</div>

    <div className='contact container mt-5'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
        <Form.Label>Messages</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Send Your Messages' />
      </Form.Group>
      <Button style={{margin:"20px"}} as="input" type="submit" value="Submit" />{' '}
    </Form>
   
   



    </div>
    
    
    
    
    
    </>
  )
}

export default Contact
