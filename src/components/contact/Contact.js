import React from 'react'
import './Contact.scss'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from '@mui/material';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>GET IN TOUCH</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div className='contact'>
        <div className='contact-info'>
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
        </div>
        <div className="contact-form container mt-5">
          <h2 className="mb-3">Send Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <Button variant="contained">SEND</Button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact