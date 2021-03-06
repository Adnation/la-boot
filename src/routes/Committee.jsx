import configs from '../configs'
import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from "react-bootstrap"

const fetchMembers = async () => {
    const res = await fetch(`${configs.API_BASE_URL}/committee`)
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
            'image_src': require('../imgs/committee/Amit.jpg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/member.png'
        },
        {
            'name': 'Shital Thakkar',
            'role': 'Vice President',
            'image_src': require('../imgs/committee/sheetal.jpg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/sheetal.jpeg'
        },
        {
            'name': 'Bharat Thakkar',
            'role': 'Chairman',
            'image_src': require('../imgs/committee/bharat.jpg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/sheetal.jpeg'
        },
        {
            'name': 'Mayur Thakkar',
            'role': 'Secretary',
            'image_src': require('../imgs/committee/mayur.jpg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/mayur.jpeg'
        },
        {
            'name': 'Trupti Thakkar',
            'role': 'Treasurer',
            'image_src': require('../imgs/committee/trupti.jpg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/trupti.jpeg'
        },
        {
            'name': 'Jay Thakkar',
            'role': 'Joint Secretary',
            'image_src': require('../imgs/committee/jay.jpg')
            // 'image_src': process.env.PUBLIC_URL + '/imgs/committee/jay.jpeg'
        }
    ])

    // useEffect(() => {
    //     fetch(`${configs.API_BASE_URL}/committee`)
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
        <Row>
            {/* <Col md={1}></Col> */}
            <Col md={12}>
                <Row xs={1} md={3} className="g-4">
                    {members.map(member => (
                        <Col>
                            <Card>
                            <Card.Img variant="top" src={member.image_src} height={500} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.role}</Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
            {/* <Col md={1}></Col> */}
        </Row>
        
        <div>&nbsp;</div>
    </Container>);
  }