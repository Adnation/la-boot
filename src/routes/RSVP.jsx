import React, { useState } from "react";
import { Container, Card, Row, Col, Form, ListGroup, Button } from "react-bootstrap"

export default function Events() {
    const [count, setCount] = useState(0);

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
                                    <Form.Select>
                                        <option>Event 1 - 05/01/2022</option>
                                        <option>Event 2 - 05/12/2022</option>
                                        <option>Event 3 - 05/30/2022</option>
                                        <option>Event 4 - 06/04/2022</option>
                                        <option>Event 5 - 06/21/2022</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Jignesh Thakkar" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="abc@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="tel" placeholder="+1(123)-456-7890" />
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
                                

                                


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header><strong>Payment Options</strong></Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div>&nbsp;</div>
        </Container>
    );
  }