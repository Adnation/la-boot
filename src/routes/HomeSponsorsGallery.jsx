import React from 'react';
import Carousel from "react-multi-carousel";
import WithStyles from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col, Card } from 'react-bootstrap/';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Home(props) {
    return <div className='sponsors-div'>
        <Container>
            <Row>&nbsp;</Row>
            <Row><h3 className="text-orange">Sponsors & Supporters</h3></Row>
            <Row>&nbsp;</Row>
            <Row>
                <Carousel responsive={responsive}>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/patel.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/ib.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/tilak.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/funasia.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/patel.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/ib.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/tilak.png?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                    <div className='px-5'>
                        <Card>
                            <Card.Img variant="top" src={require('../imgs/sponsors/funasia.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')} />
                        </Card>
                    </div>
                </Carousel>
            </Row>
            <Row>&nbsp;</Row>
            <Row>&nbsp;</Row>
            <Row>&nbsp;</Row>
        </Container>
    </div>
    
}