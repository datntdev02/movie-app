import React from 'react'
import './Contact.css'
import { Button } from '@mui/material'
import { Col, Row } from 'react-bootstrap'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <div className='contact'>
        <div className='content'>
          <h1>Get in touch</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <Row className='contact-container'>
          <Col className='contact-info'>
            <div className='box'>
              <div className='icon'><i class="bi bi-telephone-fill"></i></div>
              <div className='text'>
                <h3>Phone: </h3>
                <p>0909090909</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><i class="bi bi-envelope-fill"></i></div>
              <div className='text'>
                <h3>Email: </h3>
                <p>FilmLasCruces@gmail.com</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><i class="bi bi-pin-map-fill"></i></div>
              <div className='text'>
                <h3>Address: </h3>
                <p>Ho Chi Minh City</p>
              </div>
            </div>
          </Col>
          <Col className='contact-form'>
            <form onSubmit={handleSubmit}>
              <Row><h2>Send Message</h2></Row>
              <Row>
                <Col className='form-group'>
                  <label>Name</label>
                  <input type="text" class="form-control" placeholder='Your Name' />
                </Col>
                <Col className='form-group'>
                  <label>Email</label>
                  <input type="email" class="form-control" placeholder='Your Email' />
                </Col>
                <div className='form-group'>
                  <label>Message</label>
                  <textarea class="form-control" rows="3" placeholder='Your Message'></textarea>              </div>
                <div className='buttonBox'><Button variant="contained">Send</Button></div>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </div >
  )
}

export default Contact