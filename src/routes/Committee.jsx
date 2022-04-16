import { Container, Card, Row, Col } from "react-bootstrap"

export default function Events() {
    return <Container>
        <div>&nbsp;</div>
        <div>
            <h3 className="text-orange">Executive Committee</h3>
        </div>
        <div>&nbsp;</div>
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
                <Card>
                <Card.Img variant="top" src={require('../imgs/member.png')} />
                <Card.Body>
                    <Card.Title>Name of the member</Card.Title>
                    <Card.Text>
                    This is a the brief description of the member. Some information like position in committee and/or
                     skills can help people know member better.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        <div>&nbsp;</div>
    </Container>
  }