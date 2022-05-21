import configs from '../configs'
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Accordion, Button, Image, Tab, Alert } from "react-bootstrap"
import { Megaphone, VectorPen } from 'react-bootstrap-icons';
import SandeshArchive from "./Sandesh-Archive";

export default function Sandesh() {
    // const [count, setCount] = useState(0);
    const [currentDoc, setCurrent] = useState(Object)
    const [archiveDocs, setDocs] = useState([]);

    const [subError, setSubError] = useState(false);
    const [subSuccess, setSubSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [editors, setEditors] = useState([
        'Mayur Thakkar',
        'Bhupendra Thakkar',
        'Shital Thakkar',
        'Ami Thakkar',
        'Dr. Nayna Thakkar',
        'Swayam Thakkar'
    ])

    const [subFormData, setSubFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    useEffect(() => {
        // fetch(`${configs.API_BASE_URL}/sandesh/get-archive`)
        fetch(`http://localhost:8000/sandesh/get-archive`)
        .then(res => res.json())
        .then(
            (docs) => {
                setCurrent(docs.current)
                setDocs(docs.archive);
            }
        )
        .catch(
            (error) => {
            console.log("Failed to archive docs");
            console.log(error);
            }
        )
    }, []);
    
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

        if (subFormData.subject === '') {
            setErrorMessage("Subject can not be empty");
            setSubError(true);
            return false;
        }

        if (subFormData.message === '') {
            setErrorMessage("message can not be empty");
            setSubError(true);
            return false;
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": subFormData.name,
            "email": subFormData.email,
            "subject": subFormData.subject,
            "message": subFormData.message
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        // fetch(`${configs.API_BASE_URL}/sandesh/post-request`, requestOptions)
        fetch(`http://localhost:8000/sandesh/post-request`, requestOptions)
        .then(res => {
            if(res.status >= 400) {
                throw new Error("Something went wrong. Please try again after sometime.");
            }
            setSubSuccess(true);
            setSubFormData({name: '', email: '', subject:'', message:''});
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
                <Col md={6} className="col-lg-7 d-flex align-items-stretch">
                    <Card>
                        {/* <Card.Header><strong>Lohana Community Update</strong></Card.Header> */}
                        <Card.Body className='center'>
                            <Card.Title className="text-orange">
                                <Megaphone className='flipped-icon' />&nbsp; Community Roundup &nbsp; <Megaphone />
                            </Card.Title>
                            <hr></hr>
                            {/* <Card.Img variant="top" src={process.env.PUBLIC_URL + '/imgs/logo-soon1.png'} /> */}
                            <span>
                                This is the community roundup board. 
                                This space will be used for important updates related to Lohana Community.<br />
                                &nbsp;<br />
                            </span>
                            <Row>
                                <h4 className='text-orange'><p>Lohana Sandesh</p></h4>
                                <a href={currentDoc.href} target="_blank">
                                    <Image src={require('../imgs/pdf.ico')} width={100} >
                                    </Image><p>{currentDoc.name}</p>
                                </a>
                            </Row>
                            <Row>&nbsp;</Row>
                            <p>Please use the Contact Lohana Sandesh below on this page to submit your announcements.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="col-lg-5 align-items-stretch">
                    <Card>
                        {/* <Card.Header><strong>Lohana Community Update</strong></Card.Header> */}
                        <Card.Body>
                            <Card.Title className="text-orange">
                                <VectorPen className='flipped-icon'/>
                                    &nbsp;&nbsp;Publisher&nbsp;&nbsp;
                                <VectorPen />
                            </Card.Title>
                            <hr></hr>
                            <Row>
                                <Col md={1}></Col>
                                <Col md={5}>
                                    <Card.Img variant="top" 
                                    src={require('../imgs/committee/mayur.jpg')} height={250} className="cornered-image"/>
                                    <div>&nbsp;</div>
                                    <h4>Mayur Thakkar</h4>
                                    <p>&nbsp;</p>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={5}>
                                <h5 className='text-orange'>Editorial Board</h5>
                                    <hr></hr>
                                    {editors.map(editor => (
                                        <p>{editor}</p>
                                    ))}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div>&nbsp;</div>
            <Row>
                <Col className="col-md-7 align-items-stretch">
                        <Card>
                            <Card.Body className='center'>
                                <Card.Title className="text-orange">Contact Lohana Sandesh</Card.Title>
                                <hr></hr>
                                <h6>Please share and submit following to include in our community news</h6>
                                <Row>
                                    <Col md={2}></Col>
                                    <Col md={10}>
                                        <ul className='text-left'>
                                            <Row>
                                                <Col md={6}><li>Compliments</li></Col>
                                                <Col md={6}><li>Achievements/Awards</li></Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}><li>Any Gnyati News</li></Col>
                                                <Col md={6}><li>Demise News</li></Col>
                                            </Row>
                                        </ul>
                                    </Col>
                                </Row>
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
                                            <Form.Label column sm="3"><strong>Subject:</strong></Form.Label>
                                            <Col sm="9">
                                                <Form.Control placeholder="Subject" value={subFormData.subject} name="subject"
                                                onChange={e => handleChange(e)} />
                                            </Col>
                                        </Form.Group>
                                        <div>&nbsp;</div>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm="3"><strong>Message:</strong></Form.Label>
                                            <Col sm="9">
                                                <Form.Control as="textarea" rows={3} 
                                                placeholder="Message" value={subFormData.message} name="message"
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
                </Col>
                <Col className="col-md-5 d-flex align-items-stretch">
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body className='center'>
                                    <Card.Title className="text-orange">Archive</Card.Title>
                                    <hr></hr>
                                    <Accordion defaultActiveKey={0}>
                                    {
                                        archiveDocs.map((docDict, index) => (
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header>
                                                    { docDict.year }
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <Row xs={1} className="g-4">
                                                        {docDict.archive.map((doc, subIndex) => (
                                                            <Col md={3}>
                                                                <a href={doc.href} target="_blank">
                                                                    <Image src={require('../imgs/pdf.ico')} width={50} >
                                                                    </Image><p>{doc.name}</p>
                                                                </a>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))
                                    }
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                
                </Col>
            </Row>
            <div>&nbsp;</div>
        </Container>
    );
  }
