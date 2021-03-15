import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import '../styles/mainPageContent.css';
import {learnMoreIcons} from "../resources/images"

const CardItem = ({title, text, image}) => {
    return (
        <Card className="cardContainer">
            <Nav.Link href="/">
                <Card.Img variant="top" src={image} className="cardImage"/>
                <Card.Body>
                    <Card.Title className="textTitle">{title.toUpperCase()}</Card.Title>
                    <div className="horizontalLine"/>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
        </Nav.Link>
        </Card>
    )
}

export default CardItem;
