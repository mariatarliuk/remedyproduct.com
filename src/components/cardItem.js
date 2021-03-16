import React from 'react';
import { Card, Nav, Col } from 'react-bootstrap';
import '../styles/mainPageContent.css';

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

export default CardItem;
