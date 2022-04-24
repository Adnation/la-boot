import React, { useState } from "react";
import { Container, Card, Row, Col, Form, ListGroup, Button } from "react-bootstrap"

export default function NewsElement(props) {

    return (
        <div>
            <Row className="text-left">
                {/* <Col md={1}></Col> */}
                <Col>
                    <h5>{props.title}</h5>
                </Col>
            </Row>
            <Row>
                <Col className="text-justify" md={8}>
                    {props.description}
                </Col>
            </Row>
            <div>&nbsp;</div>
        </div>
        
    );
  }