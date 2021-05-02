import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'


const Header = () => {
    return (
        <Navbar expand="lg" id="navbar">
            <Navbar.Brand href="/home"><span className="text-white ms-5">M</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto me-5">
                    <ul className="list-unstyled navbar-nav">
                        <li>
                            <Link className="ms-5 link text-decoration-none text-white p-2" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="ms-5 link text-decoration-none text-white p-2" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="ms-5 link text-decoration-none text-white p-2" to="/myWorks">My Work</Link>
                        </li>
                        <li>
                            <Link className="ms-5 link text-decoration-none text-white p-2" to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="ms-5 link text-decoration-none text-white p-2" to="/contact">Contact</Link>
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