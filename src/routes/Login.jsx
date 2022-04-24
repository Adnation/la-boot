import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Form, Button, Row, Col } from 'react-bootstrap/';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';


export default function Header(props) {

    const [isLoggedIn, setLogin] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies();

    function callLoginApi() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
            // body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://dde53130-53a7-4083-8262-763cb48a2270.mock.pstmn.io/login', requestOptions)
        .then((res) => res.json())
        .then((data) => {
            cookies.set('loggedInUser', data.user, { path: '/' });
            setLogin(true);
            navigate("/admin-home");
        })
    }

    return <Container >
        <div>&nbsp;</div>
        <Row><h5 className="text-orange">Admin Login</h5></Row>
        <Row className="justify-content-center">
            <Col md={3}></Col>
            <Col md={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={callLoginApi}>
                        Login
                    </Button>
                </Form>
            </Col>
            <Col md={3}></Col>
        </Row>
        <div>&nbsp;</div>
    </Container>
  }
