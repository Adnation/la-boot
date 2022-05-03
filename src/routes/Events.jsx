import configs from '../configs'
import { Container, Card, Row, Col, Accordion, ListGroup, Badge } from "react-bootstrap"
import React, { useEffect, useState } from 'react'

export default function Events() {

    const [events, setEvents] = useState([])
    const [pastEvents, setPastEvents] = useState([])

    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    const renderText = txt =>
    txt.split(" ").map(part => URL_REGEX.test(part) ? <a href={part} target="_blank">{part} </a> : part + " ");

    useEffect(() => {
        fetch(`${configs.API_BASE_URL}/events/upcoming-events`)
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
        fetch(`${configs.API_BASE_URL}/events/past-events`)
        .then(res => res.json())
        .then(
            (Revents) => {
                setPastEvents(Revents);
            }
        )
        .catch(
            (error) => {
            console.log("Failed to load past events");
            console.log(error);
            }
        )
      }, [])

    return <Container>
        <div>&nbsp;</div>
        <Row>
            <Col md={8}>
                <Row><h5 className="text-orange">Upcoming Events</h5></Row>
                <Row xs={1} md={1} className="g-4">
                    <Accordion defaultActiveKey={0}>

                    {events.map((event, index) => (
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                                <Card.Title className="text-center">
                                    {event.name}
                                </Card.Title>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Card.Body className="text-justify">
                                    <Row>
                                        <Col md={6}>
                                            {event.place ? (
                                                <span>Place: <strong>{event.place}</strong></span>
                                            ) : (
                                                <span></span>
                                            ) }
                                        </Col>
                                        <Col md={6} className="text-right">
                                            {event.place ? (
                                                <span>Date: <strong>{event.date}</strong></span>
                                            ) : (
                                                <span></span>
                                            ) }
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            {event.place ? (
                                                <span>Duration: <strong>{event.time}</strong></span>
                                            ) : (
                                                <span></span>
                                            ) }
                                        </Col>
                                    </Row>
                                    <div>&nbsp;</div>
                                        {renderText(event.description)}
                                </Card.Body>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                    </Accordion>
                </Row>
            </Col>
            <Col md={4}>
            <Row><h5 className="text-orange">Past Events</h5></Row>
            <ListGroup as="ol" variant="flush">
            {pastEvents.map((event, index) => (
                <ListGroup.Item as="li" className="past-event-list justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{event.name}</div>
                        {event.description}
                    </div>
                </ListGroup.Item>
            ))}
            </ListGroup>
            </Col>
        </Row>
        <div>&nbsp;</div>
    </Container>
  }