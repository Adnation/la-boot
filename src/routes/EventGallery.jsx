import env from "react-dotenv";
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Alert, Button, Image } from "react-bootstrap"
import GalleryComponent from "./GalleryComponent";


export default function Events() {
    const [events, setEvents] = useState([]);
    const [eventPhotos, setEventPhotos] = useState([]);

    useEffect(() => {
        fetch(`${env.API_BASE_URL}/events/past-events`)
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

    function handleChange(e) {
        if (e.target.value === '') {
            setEventPhotos([]);
            return false;
        }
        fetch(`${env.API_BASE_URL}/events/get-event-photos/${e.target.value}`)
        .then(res => res.json())
        .then(
            (Revents) => {
                setEventPhotos(Revents);
            }
        )
        .catch(
            (error) => {
            console.log("Failed to load event photos");
            console.log(error);
            }
        )
    }

    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Text >
                                &nbsp;
                            </Form.Text>
                            <Form.Select name="eventID" onChange={e => handleChange(e) } value={events.eventID}>
                                <option value=''>Please select an event</option>
                                {events.map((event, index) => (
                                    <option value={event.id}>{event.name} - {event.date}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <GalleryComponent photos={eventPhotos}/>
            </Row>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </Container>
    );
}