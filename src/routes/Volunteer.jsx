import configs from '../configs'
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Accordion, Button, Image, Tab, Alert } from "react-bootstrap"
import { Megaphone, VectorPen } from 'react-bootstrap-icons';

export default function Events() {
    const [count, setCount] = useState(0);

    const [subError, setSubError] = useState(false);
    const [subSuccess, setSubSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const [subFormData, setSubFormData] = useState({
        name: "",
        email: "",
        phone: "",
        freeText: ""
    })
   
    const handleChange = e => setSubFormData({...subFormData, [e.target.name]: e.target.value});

    function handleSubmit(e) {
        e.preventDefault();

        setErrorMessage("");
        setSubError(false);
        setSubSuccess(false);

        if (subFormData.name === '') {
            setErrorMessage("Name can not be empty");
            setSubError(true);
            return false;
        }

        if (subFormData.email === '') {
            setErrorMessage("Email can not be empty");
            setSubError(true);
            return false;
        }

        if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(subFormData.email) === false) {
            setErrorMessage("Please provide a valid email address");
            setSubError(true);
            return false;
        }

        if (subFormData.phone === '') {
            setErrorMessage("Phone can not be empty");
            setSubError(true);
            return false;
        }

        if (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/gm.test(subFormData.phone) === false) {
            setErrorMessage("Invalid phone number. Please use 123-456-7890 format.");
            setSubError(true);
            return false;
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": subFormData.name,
            "email": subFormData.email,
            "phone": subFormData.phone,
            "free_message": subFormData.freeText
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };


        fetch(`${configs.API_BASE_URL}/volunteer/post-request`, requestOptions)
        // fetch(`http://localhost:8000/volunteer/post-request`, requestOptions)
        .then(res => {
            if(res.status >= 400) {
                throw new Error("Something went wrong. Please try again after sometime.");
            }
            setSubSuccess(true);
            setSubFormData({name: '', email: '', phone:'', freeText:''});
            return res.json();
        })
        .then(data => {
            console.log(data);
        },
        err => {
            setErrorMessage("Something went wrong. Please try again after sometime.");
            setSubError(true);
        });
    }
    
    return (
        <Container>
            <div>&nbsp;</div>
            <Row>
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <Card>
                        <Card.Body className='center'>
                            <Card.Title className="text-orange">Volunteer Form</Card.Title>
                            <hr></hr>
                            <h6>Please submit the following details to volunteer for association</h6>
                            <Row>
                                <Form>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3"><strong>Name:</strong></Form.Label>
                                        <Col sm="9">
                                            <Form.Control placeholder='Your Name' value={subFormData.name} name="name"
                                            onChange={e => handleChange(e)} />
                                        </Col>
                                    </Form.Group>
                                    <div>&nbsp;</div>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3"><strong>Email:</strong></Form.Label>
                                        <Col sm="9">
                                            <Form.Control placeholder="email@example.com" value={subFormData.email} name="email"
                                            onChange={e => handleChange(e)} />
                                        </Col>
                                    </Form.Group>
                                    <div>&nbsp;</div>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3"><strong>Phone:</strong></Form.Label>
                                        <Col sm="9">
                                            <Form.Control placeholder="Phone" value={subFormData.phone} name="phone"
                                            onChange={e => handleChange(e)} />
                                        </Col>
                                    </Form.Group>
                                    <div>&nbsp;</div>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3"><strong>Message:</strong></Form.Label>
                                        <Col sm="9">
                                            <Form.Control as="textarea" rows={3} 
                                            placeholder="Additional Message" value={subFormData.freeText} name="freeText"
                                            onChange={e => handleChange(e)} />
                                        </Col>
                                    </Form.Group>
                                    <div>&nbsp;</div>
                                    <Button variant="primary" type="submit"  onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Form>
                            </Row>
                            <Row>&nbsp;</Row>
                            <Row>
                                <Col md={12}>
                                    {subSuccess ? (
                                        <Alert variant="success" onClose={() => setSubSuccess(false)} dismissible>
                                            Success! Your request has been received.</Alert> ) : 
                                        (<span></span>) }
                                    {subError ? (
                                        <Alert variant="danger" onClose={() => setSubError(false)} dismissible>
                                            Failed! {errorMessage}</Alert> ) : 
                                        (<span></span>) }
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-2"></div>
            </Row>
            <div>&nbsp;</div>
        </Container>
    );
  }