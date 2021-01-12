import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink activeClassName='active' to='/' className='nav-item nav-link'>Home</NavLink>
          <NavLink activeClassName='active' to='/about' className='nav-item nav-link'>About</NavLink>
          <NavLink activeClassName='active' to='/login' className='nav-item nav-link'>Login</NavLink>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
