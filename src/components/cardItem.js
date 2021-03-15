import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import '../styles/mainPageContent.css';
import {learnMoreIcons} from "../resources/images"

const CardItem = ({title, text, image}) => {
    return (
        <Card className="card_container">
            <Nav.Link href="/">
                <Card.Img variant="top" src={image} className="card_image"/>
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
