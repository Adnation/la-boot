import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Carousel, Nav, Row, Col, Card, Image } from 'react-bootstrap/';

export default function Home(props) {
    return <Container>
    <Row>
        <Col>
            <Image className="d-block w-100" src={require('../imgs/fixed-background3.jpg')} />
            {/* <Card>
                <Card.Img src={require('../imgs/fixed-background3.jpg')} />
            </Card> */}

            {/* <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={require('../imgs/fixed-background3.jpg')}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </Col>
        
    </Row>
    </Container>
}