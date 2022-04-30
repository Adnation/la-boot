import { Container, Card, Row, Col, Button } from "react-bootstrap"

export default function Events() {
    return (
        <Container>
            <div>&nbsp;</div>
            <Row>
                <h5 className="text-orange">Sponsors and Supportors</h5>
            </Row>
            <div>&nbsp;</div>
            <Row xs={1} md={4} className="g-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/logo-soon1.png')} />
                            <Card.Body>
                                <Card.Title>Coming Soon</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </Container>
    );
}