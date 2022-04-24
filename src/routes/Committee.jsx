import env from "react-dotenv";
import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from "react-bootstrap"

const fetchMembers = async () => {
    const res = await fetch(`${env.API_BASE_URL}/committee`)
    const json = await res.json()
    return json.result
}

export default function Events() {
    
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch(`${env.API_BASE_URL}/committee`)
        .then(res => res.json())
        .then(
            (members) => {
                setMembers(members);
            }
        )
        .catch(
        (error) => {
          console.log("Failed to load committee members");
          console.log(error);
        }
      )
      }, [])
    
    return (<Container>
        <div>&nbsp;</div>
        <div>
            <h3 className="text-orange">Executive Committee</h3>
        </div>
        <div>&nbsp;</div>
        <Row xs={1} md={3} className="g-4">
        {members.map(member => (
            <Col>
                <Card>
                <Card.Img variant="top" src={`data:image/jpeg;base64,${member.picture_bin.$binary.base64}`} />
                <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.role}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
        <div>&nbsp;</div>
    </Container>);
  }