import React from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
//import background from '../images/blue_background.svg';
import '../styles/mainPageContent.css';
import CardItem from './cardItem';

const MainContent = () => {
    const items = [
        {
            id: 1,
            title: 'startups',
            text: 'For startups, RPS helps with overall strategy to assist founders with building and taking their products to market.',
        }, 
        {
            id: 2,
            title: 'enterprise',
            text: 'For enterprise companies, RPS applies their startup expertise to implement nimble digital transformations.',
        }, 
        {
            id: 3,
            title: 'investment',
            text: 'RPS invests in select companies across industries. You can find investment criteria here.',
        }, 
    ]


    return (
        <div className="main_container">
            <div className="main_content">
                <Container>
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
            </div>
            <div class="background_top"></div>
            <div className="background_bottom"></div>
        </div>
    )
}

export default MainContent;