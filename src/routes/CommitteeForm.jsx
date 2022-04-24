import React, { useState } from "react";
import { Container, Card, Row, Col, Form, ListGroup, Button } from "react-bootstrap"

export default function Events() {
    
    const [memberName, setMemberName] = useState(''); 
    const [memberRole, setMemberRole] = useState(''); 
    const [memberPic, setMemberPic] = useState(); 
    
    // const handleMemberNamechange = (event) => {
    //     event.preventDefault();
    //     setMemberName(event.target.value);
    // };

    // const handleMemberRolechange = (event) => {
    //     event.preventDefault();
    //     setMemberRole(event.target.value);
    // };

    const [formData, setFormData] = useState({
        memberName: "",
        memberRole: "",
        memberPic: undefined
    })

    const handleChange = (event) => {
        event.preventDefault();
        setFormData({[event.target.name]: event.target.value})
    };

    const handleFileChange = e => {
        setFormData({
          [e.target.name]: e.target.files[0],
        })
        // setMemberPic(e.target.files[0])
    }

    const submitMember = (event) => {
        event.preventDefault();
        var payload = new FormData();
        console.log(formData.memberName)
        console.log(formData.memberRole)
        payload.append("profile_pic", formData.memberPic);
        payload.append("name", formData.memberName);
        payload.append("role", formData.memberRole);

        var requestOptions = {
            method: 'POST',
            body: payload,
            redirect: 'follow'
        };

        fetch("http://localhost:8000/committee", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    };

    return (
        <Container>
            <div>&nbsp;</div>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
                    <Card>
                        <Card.Header><strong>ADD MEMBER</strong></Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Full name: {formData.memberName}
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Full Name of the member" 
                                        onChange={handleChange}
                                        value={formData.memberName}
                                        name="memberName" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        Position: {formData.memberRole}
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Select onChange={handleChange}
                                        value={formData.memberRole}
                                        name="memberRole">
                                            <option>President</option>
                                            <option>Vice-President</option>
                                            <option>Treasurer</option>
                                            <option>Joint Treasurer</option>
                                            <option>Secretary</option>
                                            <option>Join Secretary</option>
                                        </Form.Select>
                                        {/* <Form.Control type="text" placeholder="Position held by this member" /> */}
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        Upload photo
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="file" onChange={ e => handleFileChange(e)}
                                        defaultValue={formData.memberPic}
                                        name="memberPic"/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 1 }}>
                                    <Button type="button" onClick={submitMember}>Submit</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div>&nbsp;</div>
        </Container>
    );
  }