import React, { useState } from "react";
import { Container, Card, Row, Col, Form, ListGroup, Button } from "react-bootstrap"

export default function Surveys() {

    return (
        <Container>
            <div>&nbsp;</div>
            <Row>
                <Col><h5>Survey</h5></Col>
            </Row>
            <Row>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Text className="text-muted">
                            Please select the survey you wish to participate in
                        </Form.Text>
                        <Form.Select>
                            <option>Event 1 - 05/01/2022</option>
                            <option>Event 2 - 05/12/2022</option>
                            <option>Event 3 - 05/30/2022</option>
                            <option>Event 4 - 06/04/2022</option>
                            <option>Event 5 - 06/21/2022</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <iframe src="https://www.surveymonkey.com/r/QDFHDW8" width="960" height="740">
                </iframe>
            </Row>
            <div>&nbsp;</div>
        </Container>
    );
  }