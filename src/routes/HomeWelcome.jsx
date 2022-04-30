import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap/';
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'

export default function Home(props) {
    return <Container>
    <Row>
        {/* <Col sm={1}>
            <LeftSideBar />
        </Col> */}
        <Col sm={8}>
            <Card className="border-0 text-justify" style={{ textAlign: 'left' }}>
                <Card.Body>
                    <div><h3 className="text-center text-orange">Welcome to Lohana Association of DFW</h3></div>
                        <div>
                            <span>
                                Lohana Association of Dallas Fort Worth was founded in 2022. 
                                The goal of our Non-Profit organization is to unite and serve all Lohanas living in DFW metroplex 
                                and to promote and preserve our heritage and language, and bring cultural awareness to future 
                                generations by providing a platform to all of us while serving the community needs.<br/>
                            </span>
                        </div>
                    <div>&nbsp;</div>
                        <div>
                            <span>
                                Lohana Association organises activities like picnics, sportings events, festival celebrations and meetups year around 
                                to bring Lohanas of Dallas Fort Worth together. Lohana Association is also proud of providing this 
                                platform for business and entrepreneur to find new opportunities of growth and collabration within the community and beyond. 
                                With large influx of people moving in the North Texas from different part of the United States and the world, 
                                Association is set to grow exponentially year after year.
                                <br/>
                            </span>
                        </div>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={4}>
            {/* <RightSideBar /> */}
            <LeftSideBar />
        </Col>
    </Row>
    <Row>&nbsp;</Row>
    </Container>
}