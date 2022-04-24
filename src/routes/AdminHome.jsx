import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Button, Card, Row, Col, ListGroup } from 'react-bootstrap/';
import { Link } from "react-router-dom";

export default function Header(props) {
    return <Container>
        <div>&nbsp;</div>
        <Row><h5 className='text-orange'>Admin Dashboard</h5></Row>
        <div>&nbsp;</div>
        <Row xs={1} md={3} className="g-4">
            <Col>
                <Card>
                    <Card.Header>Committee</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item action>
                                <Link to="/committee-form" className="admin-db-link">Add member</Link>
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Update member
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Remove member
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>Events</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item action>
                                Add event
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Update event
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Remove event
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Upload photos
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>Sponsors</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item action>
                                Add sponsor
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Update sponsor
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Remove sponsor
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>Survey</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item action>
                                Add survey
                            </ListGroup.Item>
                            <ListGroup.Item action>
                                Remove survey
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>RSVP</Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item action>
                                View RSVP
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <div>&nbsp;</div>
    </Container>
}
