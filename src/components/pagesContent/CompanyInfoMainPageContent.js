import * as React from "react"
import {Col, Container, Image, Row, Button} from "react-bootstrap"
import {serviceIcons, productsLogo} from "../../resources/images"
import Link from "gatsby-link";
import "../../styles/companyInfo.css";
import Carousel,  { consts } from "react-elastic-carousel";
import ProductPictureBlock from './CompanyInfo'
import {learnMoreIcons} from "../../resources/images.js";
import {cases} from "../../resources/texts"

function ServiceColumn({iconsArray, textsArray}) {
    return (
        iconsArray.map((elem, index) => {
            return (
                <Col key={textsArray[index] + index} className="mb-3" xl={4} md={12}>
                    <span>
                        <Image className="mr-3" src={iconsArray[index]} width={27}/>
                        {textsArray[index]}
                    </span>
                </Col>
            )
        })
    )
}

const ProductsLogo = () => {
    return (
        Object.values(productsLogo).map((elem, index) => {
                return (
                    <Image
                        key={index + Object.keys(productsLogo)[index]}
                        className={`mr-4 ml-4 ${index < 3 && "mb-lg-5"} mb-3 mt-3`}
                        src={elem}
                    />
                )
            }
        )
    )
}

const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 600, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1000, itemsToShow: 3, itemsToScroll: 3 },
];

const CompanyInfoMainPageContent = () => {
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? 'buttonArrow buttonArrowLeft' : 'buttonArrow buttonArrowRight'
        return (
          <Button onClick={onClick} disabled={isEdge} className="btn-light bg-transparent border-none p-0">
             <Image src={learnMoreIcons.arrow} alt="arrow" className={pointer}/>
          </Button>
        )
    }

    return (
        <>
        <Container fluid>
            <Container id="services" className="servicesContainer">
                <Container className="mb-5 mt-4 d-flex justify-content-start">
                    <h2>SERVICES</h2>
                </Container>
                <Row className="d-flex justify-content-between mt-4">
                    <ServiceColumn
                        iconsArray={[serviceIcons.developerIcon, serviceIcons.dataScienceIcon, serviceIcons.apiIcon]}
                        textsArray={["Custom Software Development", "Data Science", "API Development & Integrations"]}/>
                </Row>
                <Row className="d-flex justify-content-between">
                    <ServiceColumn
                        iconsArray={[serviceIcons.ctoIcon, serviceIcons.diligenceIcon, serviceIcons.dataToolsIcon]}
                        textsArray={["CTO as a service", "Technical Due Diligence", "Data Tools"]}/>
                </Row>
                <Row id="partners" className="d-flex justify-content-between mb-5">
                    <ServiceColumn
                        iconsArray={[serviceIcons.leaderIcon, serviceIcons.performanceIcon, serviceIcons.ventureIcon]}
                        textsArray={["Product Leadership", "Performance Optimization", "Venture Strategy"]}/>
                </Row>
            </Container>
            <Container className="mt-5 mb-5 d-flex flex-wrap justify-content-lg-between justify-content-center">
                <ProductsLogo/>
            </Container>
        </Container>
        <Container fluid className="grayBg">
            <Container fluid id="ourWork" className="ourWorkContainer">
                <Container className="d-flex justify-content-start">
                    <Link to="/cases">
                        <h2>OUR WORK</h2>
                    </Link>
                </Container>
                <Container fluid className="d-flex flex-wrap justify-content-center carouselContainer">
                    <Carousel renderArrow={myArrow} breakPoints={breakPoints} focusOnSelect={true}>
                        {cases.map((item, index) => (
                            <ProductPictureBlock
                                picture={item.picture}
                                productName={item.productName}
                                featuresArray={item.featuresArray}
                                width='22rem'
                                key={index}
                                url={item.url}
                            />
                        ))}
                        </Carousel>
                </Container>
            </Container>
        </Container>
        </>
    )
}

export default CompanyInfoMainPageContent
