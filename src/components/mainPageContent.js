import React from 'react';
import { Container, Row, Col, CardDeck, Nav, Image } from 'react-bootstrap';
import '../styles/mainPageContent.css';
import CardItem from './cardItem';
import {learnMoreIcons} from "../resources/images.js"

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
        <div className="mainContainer">
            <div className="mainTitle">
                <Container>
                    <Row>
                        <Col className="mainText">
                            Remedy product studio is a product partner
                        </Col>
                    </Row>
                    <Row className="linksWork">
                        <Col>
                            <Nav.Link href="mailto:Hello@remedyproduct.com" className="link_text">Work with us</Nav.Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav.Link href="#learn_more" className="arrowLink">
                                <Image src={learnMoreIcons.arrow} alt="arrow"/>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
                {/* <div className="main_bg"></div> */}
            </div>
            <div className="mainContent">
                <Container id="learn_more">
                    <Row>
                        <Col className="blueBackText">
                            Supporting founders and established companies in creating the next generation of great digital products
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="cardBlock">
                <Container>
                    <CardDeck>
                        {items.map(item => (
                            <CardItem title={item.title} text={item.text} image={item.image} key={item.id}/>
                        ))}
                    </CardDeck>
                </Container>
                <div className="backgroundTop"/>
                <div className="backgroundBottom"/>
            </div>
        </div>
    )
}

export default MainContent;
