import React from 'react';
import { Container, Row, Col, Nav, Image, Card } from 'react-bootstrap';
import '../styles/mainPageContent.css';
import {learnMoreIcons} from "../resources/images.js";

const CardItem = ({title, text, image}) => {
    return (
        <Col lg={4} md={12}>
            <Card className="cardContainer pt-4 pb-4 mb-5">
                <Nav.Link href="/">
                    <Card.Img variant="top" src={image} className="cardImage mb-3"/>
                    <Card.Body className="p-2">
                        <Card.Title className="textTitle">{title.toUpperCase()}</Card.Title>
                            <div className="horizontalLine mt-4 pt-4"/>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                </Nav.Link>
            </Card>
        </Col>
    )
}

const MainContent = () => {
    const items = [
        {
            id: 1,
            title: 'startups',
            image: learnMoreIcons.startups,
            text: 'For startups, RPS helps with overall strategy to assist founders with building and taking their products to market.',
        },
        {
            id: 2,
            title: 'enterprise',
            image: learnMoreIcons.enterprise,
            text: 'For enterprise companies, RPS applies their startup expertise to implement nimble digital transformations.',
        },
        {
            id: 3,
            title: 'investment',
            image: learnMoreIcons.investment,
            text: 'RPS invests in select companies across industries. You can find investment criteria here.',
        },
    ]


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
                        {items.map(item => (
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

