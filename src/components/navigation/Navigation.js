import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Navigation.css'

export const Theme = React.createContext();
function Navigation() {
  const [toggle, setToggle] = useState(true)
  return (
    <Theme.Provider value={toggle}>
      <div id={toggle ? '' : 'navBarColor'} className='nav'>
        <Container>
          <Navbar expand="lg" collapseOnSelect >
            <Navbar.Brand><h2 id={toggle ? '' : 'heading'}>Film Las Cruces</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle' />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/" className="nav-link" id={toggle ? '' : 'MoviesDark'}
                  style={({ isActive }) => { return { color: isActive ? '#0438C6' : '#fff' } }}>
                  Home
                </NavLink>
                <NavLink to="/news" className="nav-link" id={toggle ? '' : 'MoviesDark'}
                  style={({ isActive }) => { return { color: isActive ? '#0438C6' : '#fff' } }}>
                  News
                </NavLink>
                <NavLink to="/about" className="nav-link" id={toggle ? '' : 'MoviesDark'}
                  style={({ isActive }) => { return { color: isActive ? '#0438C6' : '#fff' } }}>
                  About
                </NavLink>
                <NavLink to="/contact" className="nav-link" id={toggle ? '' : 'MoviesDark'}
                  style={({ isActive }) => { return { color: isActive ? '#0438C6' : '#fff' } }}>
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
              <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
            </div>
          </Navbar>
        </Container>
      </div>
    </Theme.Provider>

  )
}

export default Navigation