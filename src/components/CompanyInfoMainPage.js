import * as React from "react"
import {Col, Container, Image, Row} from "react-bootstrap"
import {serviceIcons} from "../resources/images"

const ServiceColumn = ({iconsArray, textsArray}) => {
    return (
        iconsArray.map((elem, index) => {
            console.log(elem)
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

const CompanyInfoMainPage = () => {

    return (
        <Container className="mt-5" style={{borderBottom: '2px solid #b4cbef'}}>
            <Row className="mb-5 mt-4">
                <h2>SERVICES</h2>
            </Row>
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
            <Row className="d-flex justify-content-between mb-5">
                <ServiceColumn
                    iconsArray={[serviceIcons.leaderIcon, serviceIcons.performanceIcon, serviceIcons.ventureIcon]}
                    textsArray={["Product Leadership", "Performance Optimization", "Venture Strategy"]}/>
            </Row>
        </Container>
    )
}

export default CompanyInfoMainPage
