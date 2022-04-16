import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Carousel, Nav, Row, Col, Card } from 'react-bootstrap/';

export default function Home(props) {
    return <Container>
    <Row>
        <Col>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../imgs/carousel/one.jpg')}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../imgs/carousel/two.jpg')}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Col>
        
    </Row>
    </Container>
}