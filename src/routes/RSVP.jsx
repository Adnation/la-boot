import configs from '../configs'
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Alert, Button, Image } from "react-bootstrap"

export default function Events() {
    const [count, setCount] = useState(0);
    const [events, setEvents] = useState([]);

    const [subError, setSubError] = useState(false);
    const [subSuccess, setSubSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const [subFormData, setSubFormData] = useState({
        eventID: "",
        name: "",
        email: "",
        phone: "",
        freeText: ""
    })

    let incrementCount = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };
    
    let decrementCount = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    };

    useEffect(() => {
        fetch(`${configs.API_BASE_URL}/events`)
        .then(res => res.json())
        .then(
            (Revents) => {
                setEvents(Revents);
            }
        )
        .catch(
            (error) => {
            console.log("Failed to load upcoming events");
            console.log(error);
            }
        )
      }, [])

    
    const handleChange = e => setSubFormData({...subFormData, [e.target.name]: e.target.value});

    function handleSubmit(e) {
        e.preventDefault();

        setErrorMessage("");
        setSubError(false);
        setSubSuccess(false);

        if (subFormData.eventID === '') {
            setErrorMessage("Please select an event for RSVP.");
            setSubError(true);
            return false;
        }

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
            "event_id": subFormData.eventID,
            "name": subFormData.name,
            "email": subFormData.email,
            "phone": subFormData.phone,
            "free_text": subFormData.freeText,
            "members": count,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        
        fetch(`${configs.API_BASE_URL}/rsvp`, requestOptions)
        .then(response => {
            response.text();
            setSubSuccess(true);
            setSubFormData({eventID: '', name: '', email:'', phone:'', freeText: ''});
            setCount(0);
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    return (
        <Container>
            <div>&nbsp;</div>
            <Row xs={1} md={2}>
                <Col>
                    <Card>
                        <Card.Header><strong>RSVP</strong></Card.Header>
                        <Card.Body>
                            <Card.Title>Please provide the RSVP for upcoming event</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Text className="text-muted">
                                        RSVP opens two weeks prior to event
                                    </Form.Text>
                                    <Form.Select name="eventID" onChange={e => handleChange(e) } value={subFormData.eventID}>
                                        <option value=''>Please select an upcoming event</option>
                                        {events.map((event, index) => (
                                            <option value={event.id}>{event.name} - {event.date}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control 
                                        type="text"
                                        placeholder="Jignesh Thakkar" 
                                        value={subFormData.name}
                                        name="name"
                                        onChange={e => handleChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                    type="email"
                                    placeholder="abc@example.com" 
                                    value={subFormData.email}
                                    name="email"
                                    onChange={e => handleChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                    type="tel"
                                    placeholder="Phone number - Format: 123-456-7890"
                                    value={subFormData.phone}
                                    name="phone"
                                    onChange={e => handleChange(e)}
                                     />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control 
                                    as="textarea"
                                    rows={3}
                                    placeholder="Please use this space for any additional comments related to this RSVP." 
                                    value={subFormData.freeText}
                                    name="freeText"
                                    onChange={e => handleChange(e)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Text muted>
                                        Additional Members
                                    </Form.Text>
                                    <div>
                                        <Button onClick={decrementCount} variant="danger">-</Button>
                                        <strong>&nbsp;&nbsp;{count}&nbsp;&nbsp;</strong>
                                        <Button onClick={incrementCount} variant="success">+</Button>
                                    </div>
                                </Form.Group>
                                <Button variant="primary" type="submit"  onClick={handleSubmit}>
                                    Submit
                                </Button>
                                <div>&nbsp;</div>
                                <Row>
                                    <Col md={12}>
                                        {subSuccess ? (
                                            <Alert variant="success" onClose={() => setSubSuccess(false)} dismissible>
                                                Success! Your RSVP has been recorded.</Alert> ) : 
                                            (<span></span>) }
                                        {subError ? (
                                            <Alert variant="danger" onClose={() => setSubError(false)} dismissible>
                                                Failed! {errorMessage}</Alert> ) : 
                                            (<span></span>) }
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header><strong>Payment Options</strong></Card.Header>
                        <Card.Body>
                            <Card.Title>Pay Using</Card.Title>
                            <Row>
                                <Col md={5}></Col>
                                <Col md={2}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + '/imgs/Zelle-Logo.png'} />
                                </Col>
                                <Col md={5}></Col>
                            </Row>
                            
                            <Row>
                                <Card.Text>
                                    Please use <a href="#">lohanadfw@gmail.com</a> to make payment using Zelle.
                                    <hr></hr>
                                    <div><strong>Pay using QR Code</strong></div>
                                    Scan the below QR code to make payment using using your smartphone.
                                    <Row>
                                        <Col md={3}></Col>
                                        <Col md={6}>
                                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/imgs/sample_qr.png'} />
                                        </Col>
                                        <Col md={3}></Col>
                                    </Row>
                                    <div>&nbsp;</div>
                                </Card.Text>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div>&nbsp;</div>
        </Container>
    );
  }