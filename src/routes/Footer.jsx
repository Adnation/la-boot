import configs from '../configs'
import React, { useState } from "react";
import { ListGroup, Form, Button, Row, Col, Alert } from 'react-bootstrap/';
import { GeoAlt, Telephone, EnvelopePaper, Quote } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export default function Footer() {
    
    const [subFormData, setSubFormData] = useState({
        subName: "",
        subPhone: "",
        subEmail: ""
    })

    const [subError, setSubError] = useState(false);
    const [subSuccess, setSubSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = e => setSubFormData({...subFormData, [e.target.name]: e.target.value})

    function handleSubmit(e) {
        e.preventDefault();

        if (subFormData.subName === '') {
            setErrorMessage("Name can not be empty");
            setSubError(true);
            return false;
        }

        if (subFormData.subPhone === '') {
            setErrorMessage("Phone can not be empty");
            setSubError(true);
            return false;
        }

        if (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/gm.test(subFormData.subPhone) === false) {
            setErrorMessage("Invalid phone number. Please use 123-456-7890 format.");
            setSubError(true);
            return false;
        }

        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(subFormData.subEmail) === false) {
            setErrorMessage("Please provide a valid email address");
            setSubError(true);
            return false;
        }

        if (subFormData.subEmail === '') {
            setErrorMessage("Email can not be empty");
            setSubError(true);
            return false;
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": subFormData.subName,
            "phone": subFormData.subPhone,
            "email": subFormData.subEmail
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        
        fetch(`${configs.API_BASE_URL}/subscribers/post`, requestOptions)
        .then(response => {response.text(); setSubSuccess(true); setSubFormData({subName: '', subPhone: '', subEmail:'' })})
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    return <footer className="page-footer font-small blue pt-4 footer-style"> 
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
                            <strong><GeoAlt className="text-orange"/></strong> 13105 Secretariat Boulevard, Frisco, TX
                        </div>
                        <div>
                            <strong><Telephone className="text-orange"/></strong> Please call any committee members
                        </div>
                        <div>
                            <strong><EnvelopePaper className="text-orange"/> </strong><a href="mailto:la-dfw@gmail.com">lohanadfw@gmail.com</a>
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
                            <img src={process.env.PUBLIC_URL + '/imgs/fb.jpg'}></img>
                        </a>
                    </Col>
                </Row>
                
            </div>
        </div>
        <hr></hr>
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
                {subSuccess ? (
                    <Alert variant="success" onClose={() => setSubSuccess(false)} dismissible>
                        Success! You have joined the subscription list.</Alert> ) : 
                    (<span></span>) }
                {subError ? (
                    <Alert variant="danger" onClose={() => setSubError(false)} dismissible>
                        Failed! {errorMessage}</Alert> ) : 
                    (<span></span>) }
            </Col>
            <Col md={2}></Col>
        </Row>
        <div className="row">
            <footer className="page-footer font-small blue pt-4 text-center">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-12 mb-md-0 mb-12">
                            <h6>JOIN US FOR MEMBER’S NEWSLETTERS</h6>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-md-0 mb-2"></div>
                        <div className="col-md-2 mb-md-0 mb-2">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control 
                                type="text"
                                placeholder="Enter name"
                                value={subFormData.subName}
                                name="subName"
                                onChange={e => handleChange(e)} />
                            </Form.Group>
                        </div>
                        <div className="col-md-2 mb-md-0 mb-2">
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Control
                                type="tel"
                                placeholder="Enter phone: 123-456-7890"
                                value={subFormData.subPhone}
                                name="subPhone"
                                onChange={e => handleChange(e)} />
                            </Form.Group>
                        </div>
                        <div className="col-md-2 mb-md-0 mb-2">
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Control
                                type="email" 
                                placeholder="Enter email" 
                                value={subFormData.subEmail} 
                                name="subEmail"
                                onChange={e => handleChange(e)} />
                            </Form.Group>
                        </div>
                        <div className="col-md-1 mb-md-0 mb-1">
                            <button 
                            type="button"
                            className="btn orange-back white-font"
                            onClick={handleSubmit}
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="col-md-2 mb-md-0 mb-1"></div>
                    </div>
                    <div className="footer-copyright text-center py-3">Website developed and maintained by:&nbsp;
                        <span><a href="https://techwishsolutions.com/" target="_blank">Aditya Thakkar</a> &nbsp;For LA-DFW</span>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</footer>
}
