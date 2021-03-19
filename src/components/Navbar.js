import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <NavLink 
                to="/posts" 
                activeStyle={{color: '#fff'}} 
                className="navbar-link"
            >
                Posts
            </NavLink>
            <NavLink 
                to="/albums" 
                activeStyle={{color: '#fff'}} 
                className="navbar-link"
            >
                Albums
            </NavLink>
        </Nav>
    </Navbar>
)

export default NavBar;