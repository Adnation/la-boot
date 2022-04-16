import { Container, Card, Row, Col, Accordion, ListGroup, Badge } from "react-bootstrap"

export default function Events() {
    return <Container>
        <div>&nbsp;</div>
        <Row>
            <Col md={8}>
                <Row><h5 className="text-orange">Upcoming Events</h5></Row>
                <Row xs={1} md={1} className="g-4">
                    <Accordion defaultActiveKey="0">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Accordion.Item eventKey={idx}>
                            <Accordion.Header>
                                <Card.Title>
                                    Upcoming Event {idx+1}
                                </Card.Title>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Card.Body>Body content for event {idx+1}</Card.Body>
                            </Accordion.Body>
                        </Accordion.Item>    
                        ))}
                    </Accordion>
                </Row>
            </Col>
            <Col md={4}>
            <Row><h5 className="text-orange">Past Events</h5></Row>
            <ListGroup as="ol" variant="flush">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <ListGroup.Item as="li" className="past-event-list justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Recent event {idx + 1}</div>
                            Recently concluded event details {idx + 1}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            </Col>
        </Row>
        <div>&nbsp;</div>
    </Container>
  }