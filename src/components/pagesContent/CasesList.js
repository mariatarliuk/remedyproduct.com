import React from 'react';
import {Container, Row, Col, Nav, Image, Card} from 'react-bootstrap';
import ProductPictureBlock from './CompanyInfo';
import {cases} from "../../resources/texts"
import '../../styles/startups.css'

const CasesList = () => {
    return (
        <div className="mb-5">
            <div className="mainBgStartups">
                <Container id="learnMore">
                    <Row className="container-fluid d-flex flex-wrap justify-content-center">
                        <Col className="titleText pt-5 pb-5">
                            Supporting founders and established companies in creating the next generation of great digital products
                        </Col>
                    </Row>
                </Container>
            </div> 
            <Container>
                <Row className="d-flex justify-content-center">
                    {cases.map((item, index) => (
                        <ProductPictureBlock
                            picture={item.picture}
                            productName={item.productName}
                            featuresArray={item.featuresArray}
                            width='20rem'
                            key={index}
                        />
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default CasesList