import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer-main'>
      <div className='footer-container'>
        <div className='row footer-main'>
          <div className='col'>
            <h4><strong>Films Las Cruces</strong></h4>
            <ul className='list-unstyled'>
              <li>0909090909</li>
              <li>FilmLasCruces@gmail.com</li>
              <li>Ho Chi Minh City</li>
            </ul>
          </div>
          <div className='col'>
            <h4><strong>About Us</strong></h4>
            <ul className='list-unstyled'>
              <li>Home</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='col'>
            <h4><strong>Services</strong></h4>
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