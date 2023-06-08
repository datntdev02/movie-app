import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-main'>
      <div className='footer-container'>
        <div className='row'>
          <div className='col'>
            <h4>Films Las Cruces</h4>
            <ul className='list-unstyled'>
              <li>0909090909</li>
              <li>FilmLasCruces@gmail.com</li>
              <li>Ho Chi Minh City</li>
            </ul>
          </div>
          <div className='col'>
            <h4>About Us</h4>
            <ul className='list-unstyled'>
              <li>Home</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='col'>
            <h4>Services</h4>
            <ul className='list-unstyled'>
              <li>Film Information</li>
              <li>Film Trailer</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className='row'>
          <p>
            Copyright &copy; by DatNT | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer