import configs from '../configs'
import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, ListGroup, Button } from "react-bootstrap"

export default function Surveys() {

    const [surveyCollection, setSurvey] = useState([]);
    const [currentSurvey, setCurrentSurvey] = useState(null);
    const [selectedSurvey, setSelectedSurvey] = useState(-1);

    useEffect(() => {
        fetch(`${configs.API_BASE_URL}/survey`)
        // fetch(`http://localhost:8000/survey`)
        .then(res => res.json())
        .then(
            (Revents) => {
                setSurvey(Revents);
            }
        )
        .catch(
            (error) => {
            console.log("Failed to load upcoming events");
            console.log(error);
            }
        )
    }, []);

    function handleChange(e) {

        if (e.target.value === null) {
            setCurrentSurvey(null);
            return false;
        }
        setCurrentSurvey(surveyCollection[e.target.value]);
        setSelectedSurvey(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Text >
                                &nbsp;
                            </Form.Text>
                            <Form.Select name="eventID" onChange={e => handleChange(e) } value={selectedSurvey}>
                                <option value="-1">Please select a survey</option>
                                {surveyCollection.map((survey, index) => (
                                    <option value={index}>{survey.survey_name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                {/* <iframe src={currentSurvey.link} width="960" height="740"></iframe> */}
                {currentSurvey ? <iframe src={currentSurvey.link} width="960" height="740"></iframe> : <iframe width="960" height="500"></iframe> }
            </Row>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </Container>
    );
  }