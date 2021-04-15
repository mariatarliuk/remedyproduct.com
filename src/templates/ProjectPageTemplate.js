import * as React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link45deg} from "react-bootstrap-icons";
import {featuresList} from "../components/pagesContent/CompanyInfo";
import "../styles/projectPage.css"

function simpleList(textArray) {
    if (textArray) {
        return <ul className="list-group" style={{listStyleType: "none"}}>
            {textArray.map((elem, index) => {
                return <li className="=text-justify" key={index} style={{fontSize: 14}}>{elem}</li>
            })}
        </ul>
    }
}

function iconsList(techologies) {
    if (techologies) {
        return (
            <ul style={{listStyleType: "none"}} className="d-flex align-items-center flex-wrap pl-0">
                {techologies.map((elem, index) => (
                    <li className="mr-3" key={index}>
                        <Image src={elem} fluid/>
                    </li>
                ))}
            </ul>
        )
    }
}

const ProjectPageTemplate = ({data}) => {
    return (
        <>
            <div
                className="introPictureContainer container-fluid d-flex flex-wrap justify-content-start align-content-end"
                style={{backgroundImage: `url(${data.introImage})`}}>
            <span className="ml-5 mb-4 bg-light p-2 rounded-pill">
                <Link45deg
                    size={30}
                />
                <a className="ml-2 mr-2" href={data.siteLink} rel="noreferrer" target="_blank">{data.site}</a>
            </span>
            </div>
            <Container className="mt-5 mb-5">
                <Row lg={10} className="d-flex flex-wrap justify-content-lg-between justify-content-center">
                    <Col lg={3} md={12} className="mt-3">
                        <div><Image src={data.logo} width={150}/></div>
                        <div
                            className="d-flex flex-wrap mt-3">{data.features && featuresList(data.features)}</div>
                        <p className="introProductText mt-4">{data.introText}</p>
                        {data.testimonials &&
                        <>
                            <h6 className="mt-5 mb-3 fontBold">Testimonials</h6>
                            <Row
                                className="mb-3 container d-flex flex-nowrap justify-content-start align-content-center">
                                <div className="d-flex justify-content-center align-items-center"><Image
                                    src={data.testimonials.avatar} width={50}/></div>
                                <div className="d-flex flex-wrap justify-content-start mt-2 ml-3">
                                    <span className="ceoName">{data.testimonials.name}</span>
                                    <span className="ceoPosition">{data.testimonials.position}</span>
                                </div>
                            </Row>
                            <p className="introProductText mt-1">{data.testimonials.comment}</p>
                        </>
                        }
                    </Col>
                    <Col lg={6} md={12} className="mainContentProject">
                        <h4 className="mt-4 mb-2">Challenge</h4>
                        <p className="infoText text-justify">{data.challengeText}</p>
                        <h4 className="mt-4 mb-2">Solutions</h4>
                        <p className="infoText text-justify">{data.solutionsTexst}</p>
                        <h4 className="mt-4 mb-2">Results</h4>
                        <ul className="list-group" style={{listStyleType: "none"}}>
                            {data.results && data.results.map((elem, index) => {
                                return <li key={index} className="text-justify">{elem}</li>
                            })}
                        </ul>
                        <h4 className="businessText mb-2">Business Impact</h4>
                        <p className="infoText text-justify">{data.businessImpactText}</p>
                    </Col>
                    <Col lg={3} md={12} className="devInfo">
                        <h5 className="mt-4 mb-3">Product Team</h5>
                        {simpleList(data.productTeam)}
                        <h5 className="mb-3 mt-5">Funding Stage</h5>
                        {simpleList(data.fundingStage)}
                        <h5 className="mb-3 mt-5">Technologies</h5>
                        {iconsList(data.techologies)}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProjectPageTemplate
