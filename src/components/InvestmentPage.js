import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/investment.css';
import {investmentIcon} from "../resources/images.js";

const data = [
    {
        id: 1,
        title: 'Why remedy product studio?',
        body: 'Our experience working with venture backed startups gives us insight into what a company needs to demonstrate to successfully raise its next round of funding. We know the importance of hitting key metrics to demonstrate product-market fit and growth potential.'
    },
    {
        id: 2,
        title: 'How does it work?',
        body: 'We help startups prepare for fundraising by crafting the narrative, preparing the pitch, and ensuring you can demonstrate product-market fit. We actively connect startups with angels and venture capitalists in our network. During the fundraising process we help with deck preparation, pitch practice, and technical due diligence.'
    },
    {
        id: 3,
        title: 'Looking for a Technical Co-Founder?',
        body: 'On a limited basis, Remedy co-founds companies with talented entrepreneurs who are looking for a technical co-founder. Ideal Founders for this program are industry experts that have a competitive advantage in a large market.'
    },
    {
        id: 4,
        title: 'What do we offer?',
        body: 'Remedy provides funding, technical resources, and senior technical and product leadership in exchange for a meaningful equity stake.'
    },
]

const InvestmentItem = () => {
    return (
        data.map((item, i) => (
            <Col md={12} lg={6} className="pb-4">
                <Row className="mb-4">
                    <Col className="investHeading d-flex align-items-center col-8">    
                        {item.title.toUpperCase()}
                    </Col>
                </Row>
                <Row className="d-flex align-items-center">
                    <Col className="lineBlueInvest col-11 ml-3" />
                </Row>
                <Row>
                    <Col className="pt-3 mb-5">
                        {item.body}
                    </Col>
                </Row>
            </Col>
        ))
    )
}

const InvestmentPage = () => {
    return (
        <>
        <div className="mainBgStartups">
            <Container >
                <Row className="container-fluid d-flex flex-wrap justify-content-center">
                    <Col className="titleText pt-5 pb-5">
                        Remedy Product Studio is a product partner, a technical cofounder, a development solution, and a strategic investor
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
            <Row className="pt-5 mb-5 d-flex align-items-center">
                <Col md={6}>
                    <Image src={investmentIcon.investmentPicture} fluid />
                </Col>
                <Col xs={12} md={5} className="introTextInvest display-2" >
                Remedy invests in pre-seed and seed rounds in the form of sweat equity. We primarily invest in companies after working together for several months - this is part of our due diligence. We need to know our founders and make sure their work style is a good fit before making an investment decision.
                </Col>
            </Row>
            
        </Container>
        <div className="goalsBg">
            <Container>
                <Row className="goals pt-5 pb-3">
                    <InvestmentItem />
                </Row>
            </Container>
        </div>
        </>
    )
}

export default InvestmentPage;