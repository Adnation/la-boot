import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Navbar, Nav, Row, Col, Card, Image } from 'react-bootstrap/';

export default function Header(props) {
    return <div className='top-bar-background' >
      <Container>
        <Row className="align-items-center">
        
          <Col sm={2}>
            <img src={require('../imgs/logo2.jpg')} className="d-inline-block align-top App-logo" width="200" height="175" />
          </Col>
          <Col sm={8}>
            <div>
              <span className='header-text-blue'>
                Lohana Association of Dallas Fortworth
              </span>
            </div>
            <div>
              <span className='header-text-red'>
                501(c)(3) Non-Profit Organization
              </span>
            </div>
          </Col>
          <Col sm={2} className="d-none d-sm-block">
            <Image src={require('../imgs/j-bapa.jpg')} className="rounded-circle"  width="100" height="150"  />
          </Col>
        </Row>
      </Container>
    </div> 
    
}