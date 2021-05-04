import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'


const Header = () => {
    return (
        <Navbar expand="lg" id="navbar">
            <Navbar.Brand href="/home"><span className="text-white ms-5">M</span></Navbar.Brand>
            <Navbar.Toggle className="bg-nav" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-5">
                    <ul className="list-unstyled navbar-nav">
                        <li>
                            <NavLink className="ms-5 link text-decoration-none text-white mb-2" activeClassName="selected" to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="ms-5 link text-decoration-none text-white mb-2" to="/about" activeClassName="selected">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="ms-5 link text-decoration-none text-white mb-2" to="/myWorks" activeClassName="selected">My Work</NavLink>
                        </li>
                        <li>
                            <NavLink className="ms-5 link text-decoration-none text-white mb-2" to="/blog" activeClassName="selected">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className="ms-5 link text-decoration-none text-white mb-2" to="/contact" activeClassName="selected">Contact</NavLink>
                        </li>
                        <li>
                            <a className="text-decoration-none btn btn-brand text-white ms-5 download" href="https://cutt.ly/2bl0JaL">
                                <FontAwesomeIcon icon={faDownload} /> download resume
                            </a>
                        </li>
                    </ul>


                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;