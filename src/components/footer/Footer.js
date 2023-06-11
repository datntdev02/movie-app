import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-main row'>
        <div className='col'>
          <ul className='list-unstyled'>
            <h4 className='list-title'>Films Las Cruces</h4>
            <li>0909090909</li>
            <li>FilmLasCruces@gmail.com</li>
            <li>Ho Chi Minh City</li>
          </ul>
        </div>
        <div className='col'>
          <ul className='list-unstyled'>
            <h4 className='list-title'>About Us</h4>
            <li>Home</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='col'>
          <ul className='list-unstyled'>
            <h4 className='list-title'>Services</h4>
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
  )
}

export default Footer