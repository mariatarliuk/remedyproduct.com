import React from 'react';
import {Container, Row, Col, Nav, Image, Card} from 'react-bootstrap';
import '../../styles/mainPageContent.css';
import {learnMoreIcons} from "../../resources/images.js";
import {cardsItems} from "../../resources/texts";

const CardItem = ({title, text, image}) => {
    return (
        <Col lg={4} md={12}>
            <Card className="cardContainer pt-4 pb-4 mb-5">
                <Nav.Link href="/">
                    <Card.Img variant="top" src={image} className="cardImage"/>
                    <Card.Body className="p-2">
                        <Card.Title className="textTitle">{title.toUpperCase()}</Card.Title>
                        <div className="horizontalLine"/>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Nav.Link>
            </Card>
        </Col>
    )
}

const MainContent = () => {
    return (
        <div className="mainContainer position-relative">
        <div className="heroContainer position-relative">
            <div className="heroBg position-absolute"></div>
            <div className="mainBg position-absolute"></div>
            <div className="hero pt-5">
                <Container className="mainTextContainer d-flex flex-column justify-content-center align-items-center ">
                    <div className="titleContent">
                        <Row>
                            <Col className="mainText mb-4" lg={9} xs={12}>
                                Remedy product studio is a product partner
                            </Col>
                        </Row>
                        <Row className="linksWork">
                            <Col className="p-2 mb-3">
                                <Nav.Link href="mailto:Hello@remedyproduct.com" className="linkText">Work with us</Nav.Link>
                            </Col>
                        </Row>
                    </div>
                    <Row className="arrowLink position-absolute">
                        <Col>
                            <Nav.Link href="#learnMore">
                                <Image src={learnMoreIcons.arrow} alt="arrow"/>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </div>
        <div className="mainContent position-relative">
                <Container>
                    <Row>
                        <Col className="blueBackText mt-0" id="learnMore">
                            Supporting founders and established companies in creating the next generation of great digital products
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="cardBlock position-relative">
                <Container>
                    <Row >
                        {cardsItems.map(item => (
                            <CardItem title={item.title} text={item.text} image={item.image} key={item.id}/>
                        ))}
                    </Row>
                </Container>
                <div className="backgroundTop position-absolute"/>
                <div className="backgroundBottom position-absolute left-0 "/>
            </div>
    </div>
    )
}

export default MainContent;
