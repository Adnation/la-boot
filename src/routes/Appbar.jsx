import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap/';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';


export default function Header(props) {
    const cookies = new Cookies();
    let appbar = null;
    const [expanded, setExpanded] = useState(false);

    if (cookies.get('loggedInUser')) {
        appbar = <Nav className="justify-content-center" variant="pills" activeKey="/">
            <Nav.Link className="nav-text"  onClick={() => setExpanded(false)} >
                <Link to="/" className="nav-link-route">Home</Link>
            </Nav.Link>
            <Nav.Link className="nav-text"  onClick={() => setExpanded(false)} >
                <Link to="/about" className="nav-link-route">About US</Link>
            </Nav.Link>
            <Nav.Link className="nav-text"  onClick={() => setExpanded(false)} >
                <Link to="/committee" className="nav-link-route">Committee</Link>
            </Nav.Link>
            <Nav.Link className="nav-text"  onClick={() => setExpanded(false)} >
                <Link to="/events" className="nav-link-route">Events</Link>
            </Nav.Link>
            <Nav.Link className="nav-text"  onClick={() => setExpanded(false)} >
                <Link to="/news" className="nav-link-route">News</Link>
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/sponsors" className="nav-link-route">Sponsors</Link>
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/gallery" className="nav-link-route">Photo Gallery</Link>
            </Nav.Link>
            {/* <Nav.Link className="nav-text">
                <Link to="/contact" className="nav-link-route">Contact Us</Link>
            </Nav.Link> */}
            <Nav.Link className="nav-text"  onClick={() => setExpanded(false)} >
                <Link to="/survey" className="nav-link-route">Survey</Link>
            </Nav.Link>
            <Nav.Link className="nav-text"  onClick={() => setExpanded(false)} >
                <Link to="/rsvp" className="nav-link-route">RSVP / Pay</Link>
            </Nav.Link>
        </Nav>
    } else {
        appbar = <Nav className="justify-content-center me-auto" variant="pills" activeKey="/"> 
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/" className="nav-link-route">Home</Link>
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/about" className="nav-link-route">About US</Link>
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/committee" className="nav-link-route">Committee</Link>
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/events" className="nav-link-route">Events</Link>
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/sponsors" className="nav-link-route">Sponsors</Link>
            </Nav.Link>
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/gallery" className="nav-link-route">Photo Gallery</Link>
            </Nav.Link>
            {/* <Nav.Link className="nav-text">
                <Link to="/contact" className="nav-link-route">Contact Us</Link>
            </Nav.Link> */}
            <Nav.Link className="nav-text" onClick={() => setExpanded(false)} >
                <Link to="/rsvp" className="nav-link-route">RSVP / Pay</Link>
            </Nav.Link>
        </Nav>
    }

    return <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark" sticky="top">
    <Container >
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                {appbar}
        </Navbar.Collapse>
    </Container>
    </Navbar>;
  }
