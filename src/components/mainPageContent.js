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
        <div className="main_container">
            <div className="main_title">
                <Container>
                    <Row>
                        <Col className="main_text">
                            Remedy product studio is a product partner
                        </Col>
                    </Row>
                    <Row className="links_work">
                        <Col>
                            <Nav.Link href="mailto:Hello@remedyproduct.com" className="link_text">Work with us</Nav.Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav.Link href="#learn_more" className="arrow_link">
                                <Image src={learnMoreIcons.arrow} alt="arrow"/>
                            </Nav.Link>
                        </Col>
                    </Row>
                </Container>
                {/* <div className="main_bg"></div> */}
            </div>
            <div className="main_content">
                <Container id="learn_more">
                    <Row>
                        <Col className="blue_back_text">
                            Supporting founders and established companies in creating the next generation of great digital products
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="card_block">
                <Container>
                    <CardDeck>
                        {items.map(item => (
                            <CardItem title={item.title} text={item.text} image={item.image} key={item.id}/>
                        ))}
                    </CardDeck>
                </Container>
                <div className="background_top"/>
                <div className="background_bottom"/>
            </div>
        </div>
    )
}

export default MainContent;
