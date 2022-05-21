import configs from '../configs'
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Alert, Button, Image, Tab, Nav } from "react-bootstrap"
import { Megaphone, VectorPen } from 'react-bootstrap-icons';

export default function Archive(props) {
    return (
        <Container>
            <div>&nbsp;</div>
            <Row>
            {props.docs.map(doc => (
                <span>{doc.name}</span>
            ))}
            </Row>
        </Container>
    )
}
