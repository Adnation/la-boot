import { Container, Navbar, Nav, Row, Col, Image } from 'react-bootstrap/';
import { Bookmark, Book } from 'react-bootstrap-icons';


export default function Events() {
    return (
        <Container>
            <div>&nbsp;</div>
            <Row className="justify-content-center text-orange">
                <h3><Bookmark /> &nbsp; About LA-DFW &nbsp; <Bookmark /></h3>
            </Row>
            <div>&nbsp;</div>
            <Row >
                <Col>
                    <Image src={require('../imgs/j-bapa-about.jpg')} fluid />
                </Col>
                <Col md={6} className="text-justify">
                    <span>
                        DFW Lohana Association was founded in 1991. The goal of our Non-Profit organization is to unite and serve all Gujarati communities living in DFW metroplex and to promote and preserve our heritage and language, and bring cultural awareness to future generations by providing a platform to all Gujarati community while serving the community needs.
                    </span>
                    <br />
                    <br />
                    <span>
                        The charitable, social and religious activities developed steadily through the past 30+ years and the group cohesiveness of our past and present executive committee members and Board of Trustees along with many volunteers have culminated in a strong and vibrant Gujarati cultural organization. As we continue our progress in 21st century, the foundation of Charitable work and social adaptiveness set forth by our previous executive committee members, has strengthen our resolve and made us proud of our cultural heritage.
                    </span>
                </Col>
            </Row>
            <div>&nbsp;</div>
            <Row className="justify-content-center text-orange">
                <h3><Book /> &nbsp; Brief history of Lohana &nbsp; <Book /></h3>
                {/* <h3 className='text-orange'>!! Brief history of Lohana !!</h3> */}
            </Row>
            <div>&nbsp;</div>
            <Row>
                <Col md={10} className="text-justify">
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                </Col>
                
                <Col md={2}>
                    <Image src={require('../imgs/dariyalal.jpg')} fluid />
                </Col>
            </Row>
            <Row>
                <Col className="text-justify">
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </span>
                    </div>
                </Col>
            </Row>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
        </Container>
    );
  }