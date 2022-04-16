import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap/';

export default function Header(props) {
      return <div className='topbar-background'>
          <Container>
              <Row>
                  <Col>
                    <i class="fa fa-envelope-o"></i>
                  </Col>
              </Row>
          </Container>
      </div>;
  }
