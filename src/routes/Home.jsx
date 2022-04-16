import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Carousel, Nav, Row, Col, Card } from 'react-bootstrap/';
import Hero from './Hero';
import HomeWelcome from './HomeWelcome'
import HomePhotoGallery from './HomePhotoGallery'
import HomeSponsorsGallery from './HomeSponsorsGallery';

export default function Home(props) {
    return <div>
        <Hero />
        <HomeWelcome />
        <HomeSponsorsGallery />
        <HomePhotoGallery />
    </div>
    
    // <Container>
    // <Row>
    //     <Col>
    //         <Hero />
    //         <HomeWelcome />
    //     </Col>
    // </Row>
    // <Row>
    //     <Col>
    //         <HomePhotoGallery />
    //     </Col>
    // </Row>
    // <Row>
    //     <Col>
    //         <HomeSponsorsGallery />
    //     </Col>
    // </Row>
    // </Container>
}