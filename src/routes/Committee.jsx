import env from "react-dotenv";
import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from "react-bootstrap"

const fetchMembers = async () => {
    const res = await fetch(`${env.API_BASE_URL}/committee`)
    const json = await res.json()
    return json.result
}

// const styles = {
//     card: {
//       backgroundColor: '#B7E0F2',
//       borderRadius: 55,
//       padding: '3rem'
//     }
// }

export default function Events() {
    
    const [members, setMembers] = useState([
        {
            'name': 'Amit Thakkar',
            'role': 'President',
            'image_src': require('../imgs/committee/member.png')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/member.png'
        },
        {
            'name': 'Shital Thakkar',
            'role': 'Vice President',
            'image_src': require('../imgs/committee/sheetal.jpeg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/sheetal.jpeg'
        },
        {
            'name': 'Mayur Thakkar',
            'role': 'Secretary',
            'image_src': require('../imgs/committee/mayur.jpeg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/mayur.jpeg'
        },
        {
            'name': 'Trupti Thakkar',
            'role': 'Treasurer',
            'image_src': require('../imgs/committee/trupti.jpeg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/trupti.jpeg'
        },
        {
            'name': 'Jay Thakkar',
            'role': 'Joint Secretary',
            'image_src': require('../imgs/committee/jay.jpeg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/jay.jpeg'
        }
    ])

    // useEffect(() => {
    //     fetch(`${env.API_BASE_URL}/committee`)
    //     .then(res => res.json())
    //     .then(
    //         (members) => {
    //             setMembers(members);
    //         }
    //     )
    //     .catch(
    //     (error) => {
    //       console.log("Failed to load committee members");
    //       console.log(error);
    //     }
    //   )
    //   }, [])
    
    return (<Container>
        <div>&nbsp;</div>
        <div>
            <h3 className="text-orange">Executive Committee</h3>
        </div>
        <div>&nbsp;</div>
        <Row xs={1} md={3} className="g-4">
            <Col>
                <Card>
                <Card.Img variant="top" src={require('../imgs/committee/member.png')} height={350} />
                <Card.Body>
                    <Card.Title>Amit Thakkar</Card.Title>
                    <Card.Text>President</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src={require('../imgs/committee/sheetal.jpeg')} height={350} />
                <Card.Body>
                    <Card.Title>Shital Thakkar</Card.Title>
                    <Card.Text>Vice President</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src={require('../imgs/committee/mayur.jpeg')} height={350} />
                <Card.Body>
                    <Card.Title>Mayur Thakkar</Card.Title>
                    <Card.Text>Secretary</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src={require('../imgs/committee/trupti.jpeg')} height={350} />
                <Card.Body>
                    <Card.Title>Trupti Thakkar</Card.Title>
                    <Card.Text>Treasurer</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                <Card.Img variant="top" src={require('../imgs/committee/jay.jpeg')} height={350} />
                <Card.Body>
                    <Card.Title>Jay Thakkar</Card.Title>
                    <Card.Text>Joint Secretary</Card.Text>
                </Card.Body>
                </Card>
            </Col>
        {/* {members.map(member => (
            <Col>
                <Card>
                <Card.Img variant="top" src={member.image_src} height={350} />
                <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.role}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
        ))} */}
        </Row>
        <div>&nbsp;</div>
    </Container>);
  }