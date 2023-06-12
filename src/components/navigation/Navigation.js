import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Navigation.css'

export const ThemeContext = React.createContext();
function Navigation() {
  const [toggle, setToggle] = useState(true)
  return (
    <ThemeContext.Provider value={toggle}>
      <div id={toggle ? '' : 'navBarColor'} className='nav'>
        <Container>
          <Navbar expand="lg" collapseOnSelect >
            <Navbar.Brand><h2 id={toggle ? '' : 'heading'}>FILM LAS CRUCES</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link" id={toggle ? '' : 'MoviesLight'}
                  style={({ isActive }) => { return { color: isActive ? '#268BFF' : '#fff' } }}>
                  HOME
                </NavLink>
                <NavLink to="/news" className="nav-link" id={toggle ? '' : 'MoviesLight'}
                  style={({ isActive }) => { return { color: isActive ? '#268BFF' : '#fff' } }}>
                  NEWS
                </NavLink>
                <NavLink to="/about" className="nav-link" id={toggle ? '' : 'MoviesLight'}
                  style={({ isActive }) => { return { color: isActive ? '#268BFF' : '#fff' } }}>
                  ABOUT
                </NavLink>
                <NavLink to="/contact" className="nav-link" id={toggle ? '' : 'MoviesLight'}
                  style={({ isActive }) => { return { color: isActive ? '#268BFF' : '#fff' } }}>
                  CONTACT
                </NavLink>
                <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>
        </Container>
      </div>
    </ThemeContext.Provider>

  )
}

export default Navigation