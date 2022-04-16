import React from "react"
import { ListGroup, Form, Button, Row, Col } from 'react-bootstrap/';
import { GeoAlt, Telephone, EnvelopePaper } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Footer = () => <footer className="page-footer font-small blue pt-4 footer-style">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-2 mb-md-0 mb-2"></div>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 className="text-uppercase">Quick Links</h5>
                <ListGroup variant="flush">
                    <ListGroup.Item action className="quick-link">
                        <Link to="/" className="nav-link-route">Home</Link>
                    </ListGroup.Item>

                    <ListGroup.Item action className="quick-link">
                        <Link to="/committee" className="nav-link-route">Committee</Link>
                    </ListGroup.Item>

                    <ListGroup.Item action className="quick-link">
                        <Link to="/events" className="nav-link-route">Events</Link>
                    </ListGroup.Item>

                    <ListGroup.Item action className="quick-link">
                        <Link to="/community" className="nav-link-route">Community Roundup</Link>
                    </ListGroup.Item>

                    <ListGroup.Item action className="quick-link">
                        <Link to="/sponsors" className="nav-link-route">Sponsors</Link>
                    </ListGroup.Item>

                    <ListGroup.Item action className="quick-link">
                        <Link to="/gallery" className="nav-link-route">Photo Gallery</Link>
                    </ListGroup.Item>

                    <ListGroup.Item action className="quick-link">
                        <Link to="/contact" className="nav-link-route">Contact Us</Link>
                    </ListGroup.Item>

                    <ListGroup.Item action className="quick-link">
                        <Link to="/rsvp" className="nav-link-route">RSVP / Pay</Link>
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-4 mt-md-0 mt-1">
                <Row>
                    <Col>
                        <h5 className="text-uppercase text-orange">LA-DFW</h5><hr></hr>
                        <p>Lohana Association of Dallas Fortworth, aka LA-DFW, is a tax-exempt 501(C)(3) nonprofit organization.</p>
                    </Col>
                </Row>
                <Row>&nbsp;</Row>
                <Row>
                    <Col>
                        <h5 className="text-orange">CONTACT US</h5>
                        <hr></hr>
                        <div>
                            <strong><GeoAlt className="text-orange"/></strong> 123 Street Dr, Dallas, TX 75080
                        </div>
                        <div>
                            <strong><Telephone className="text-orange"/></strong> Please call any committee members
                        </div>
                        <div>
                            <strong><EnvelopePaper className="text-orange"/> </strong><a href="mailto:la-dfw@gmail.com">la-dfw@gmail.com</a>
                        </div>
                    </Col>
                </Row>
                
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-2 mb-md-0 mb-2">
                <h6 className="text-uppercase">LA-DFW Handlers</h6>
                <Row>
                    <Col md={12}>&nbsp;</Col>
                    <Col md={12}>
                        <a href="https://www.facebook.com/groups/228420225910326" target="_blank">
                            <img src={require('../imgs/fb.jpg')}></img>
                        </a>
                    </Col>
                </Row>
                
            </div>
        </div>
        <div className="row">
        <footer className="page-footer font-small blue pt-4 text-center">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-12 mb-md-0 mb-12">
                        <h6>JOIN US FOR MEMBER’S NEWS LETTER</h6>
                    </div>
                    <div>&nbsp;</div>
                </div>
            <div className="row">
            <div className="col-md-2 mb-md-0 mb-2"></div>
            <div className="col-md-2 mb-md-0 mb-2">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <Form.Group >
                    <Form.Select className="form-control mb-2" id="exampleFormControlSelect1" searchable="Select Country Code">
                        <option>United States(+1)</option>
                        <option>India (+91)</option>
                        <option>United Kingdom (+44)</option>
                        <option>Australia (+61)</option>
                        <option>New Zealand (+64)</option>
                    </Form.Select>
                </Form.Group>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="tel" placeholder="Enter phone" />
                </Form.Group>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </div>
            <div className="col-md-1 mb-md-0 mb-1">
                <button type="button" className="btn orange-back white-font">Subscribe</button>
            </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
            <span><a href="https://techwishsolutions.com/" target="_blank">TechwishSolutions</a></span>
        </div>
    </div>
    </footer>
        </div>
    </div>
</footer>

export default Footer