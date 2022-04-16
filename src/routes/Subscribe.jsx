import React from "react"
import { ListGroup, Form, Button, Row, Col, Container } from 'react-bootstrap/';

const Subscribe = () =>  <footer className="page-footer font-small blue pt-4 subscribe text-center">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            {/* <div className="col-md-2 mb-md-0 mb-2"></div> */}
            {/* <Row>
                <Col><h6>JOIN US FOR MEMBER’S NEWS LETTER</h6></Col>
            </Row> */}
            <div className="col-md-12 mb-md-0 mb-12">
                <h6>JOIN US FOR MEMBER’S NEWS LETTER</h6>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 mb-md-0 mb-2">
                
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <Form.Group >
                    <Form.Label className="sr-only">Select Country</Form.Label>
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

export default Subscribe;