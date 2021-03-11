import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import '../styles/mainPageContent.css';
import investment from '../images/investment.svg';
import enterprise from '../images/enterprise.svg';
import startups from '../images/startups.svg';

const CardItem = ({title, text}) => {
    let cardImage;
    if (title === 'investment') cardImage = investment;
    if (title === 'enterprise') cardImage = enterprise;
    if (title === 'startups') cardImage = startups;

    return (
        <Card className="card_container">
            <Nav.Link href="/">
                <Card.Img variant="top" src={cardImage} className="card_image"/>
                <Card.Body>
                    <Card.Title className="text_title">{title.toUpperCase()}</Card.Title>
                    <div className="horizontal_line"/>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
        </Nav.Link>
        </Card>
    )
}

export default CardItem;
