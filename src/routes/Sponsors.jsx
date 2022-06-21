import { Container, Card, Row, Col, Button } from "react-bootstrap"

const sponsors = [
    {
        name: "Birju Thakkar",
        url: "https://hgicrusade.com/birju16",
        image: require('../imgs/sponsors/birju.jpg')
    }
]

export default function Events() {
    return (
        <Container>
            <div>&nbsp;</div>
            <Row>
                <h5 className="text-orange">Sponsors and Supportors</h5>
            </Row>
            <div>&nbsp;</div>
            <Row xs={1} md={3} className="g-3">
                {sponsors.map((sponsor, idx) => (
                    <Col>
                        <Card>
                            <a href={sponsor.url} target="_blank">
                                <Card.Img variant="top" src={sponsor.image} />
                                <Card.Body>
                                    <Card.Title>{sponsor.name}</Card.Title>
                                </Card.Body>
                            </a>
                            
                        </Card>
                    </Col>
                ))}
            </Row>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </Container>
    );
}