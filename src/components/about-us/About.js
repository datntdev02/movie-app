import React from 'react'
import './About.css'
function About() {
  return (
    <div className='about-container'>
      <div className='about-main row'>
        <div className='col-md-2'>
          <img src='assets/images/logo.jpg' alt='' />
        </div>
        <div className='about-content col-md-10'>
          <div><h1>About Us</h1></div>
          <div><h5>Film las Cruces</h5></div>
          <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tortor ante, sodales ac tempor in, efficitur id augue. Donec viverra mauris ut lectus imperdiet ullamcorper. Sed tristique nisl sed rhoncus porttitor. Mauris nec tortor ac nisl finibus cursus. Sed eu porta augue. Integer euismod diam quis velit tincidunt, a molestie dolor lacinia. Mauris vel eros nec urna dapibus blandit in id eros. Maecenas semper luctus justo, vel semper dolor facilisis vitae. Aliquam tempus mauris pretium dolor mollis, vel semper velit maximus. Praesent ultrices, augue sit amet interdum viverra, arcu nunc fringilla urna, mattis ullamcorper ante ipsum quis purus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About