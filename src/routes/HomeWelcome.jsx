import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap/';
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSideBar'

export default function Home(props) {
    return <Container>
    <Row>
        <Col sm={3}>
            <LeftSideBar />
        </Col>
        <Col sm={6}>
            <Card className="border-0 text-justify" style={{ textAlign: 'left' }}>
                <Card.Body>
                    <div><h3 className="text-center text-orange">Welcome to Lohana Association of DFW</h3></div>
                    <div>
                        <span>DFW Lohana Association was founded in 1991. The goal of our Non-Profit organization is to unite and serve all Gujarati communities living in DFW metroplex and to promote and preserve our heritage and language, and bring cultural awareness to future generations by providing a platform to all Gujarati community while serving the community needs.<br/></span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>The charitable, social and religious activities developed steadily through the past 30+ years and the group cohesiveness of our past and present executive committee members and Board of Trustees along with many volunteers have culminated in a strong and vibrant Gujarati cultural organization. As we continue our progress in 21st century, the foundation of Charitable work and social adaptiveness set forth by our previous executive committee members, has strengthen our resolve and made us proud of our cultural heritage.</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
        <Col sm={3}>
            <RightSideBar />
        </Col>
    </Row>
    <Row>&nbsp;</Row>
    </Container>
}