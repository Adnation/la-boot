import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap/';
import { Link } from "react-router-dom";


export default function Header(props) {
      return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center" variant="pills" activeKey="/">
                    
                    <Nav.Link className="nav-text">
                        <Link to="/" className="nav-link-route">Home</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-text">
                        <Link to="/committee" className="nav-link-route">Committee</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-text">
                        <Link to="/events" className="nav-link-route">Events</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-text">
                        <Link to="/community" className="nav-link-route">Community Roundup</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-text">
                        <Link to="/sponsors" className="nav-link-route">Sponsors</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-text">
                        <Link to="/gallery" className="nav-link-route">Photo Gallery</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-text">
                        <Link to="/contact" className="nav-link-route">Contact Us</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-text">
                        <Link to="/rsvp" className="nav-link-route">RSVP / Pay</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>;
  }
