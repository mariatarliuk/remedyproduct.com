import React, {useEffect, useState} from "react";
import {Accordion, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import {employeesInfo} from "../../resources/texts";
import {featuresList} from "./CompanyInfoMainPageContent";
import "../../styles/teamPage.css"
import arrowDown from '../../images/icons/arrowDown.svg'

const TeamPageContent = () => {
    const [currentEmployee, setCurrentEmployee] = useState(employeesInfo[0])
    const [windowSize, setWindowSize] = useState();

    const handleChangeEmployee = (currentEmployee) => {
        setCurrentEmployee(currentEmployee)
    }

    useEffect(() => {
        function handleResize() {
            window.innerWidth >= 991 ? setWindowSize(true) : setWindowSize(false);
        }

        handleResize()
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const TeamList = () => {
        return <ListGroup>
            {
                employeesInfo.map((elem, index) => {
                    if (elem.id === currentEmployee.id && !windowSize) {
                        return null
                    } else {
                        return <ListGroup.Item
                            className='employeesListItem'
                            style={{cursor: 'pointer'}}
                            variant={elem.id === currentEmployee.id ? 'secondary' : 'light'}
                            key={elem.id}
                            onClick={() => handleChangeEmployee(employeesInfo[index])}>
                            <Row>
                                <Col md={4} sm={2} xs={3}><Image src={elem.avatar} width={50} rounded/></Col>
                                <Col md={8} sm={10} xs={7}
                                     className="d-flex flex-wrap justify-content-start align-content-center">
                                    <span className="employeeName">{elem.name}</span>
                                    <span className="employeePosition">{elem.position}</span>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    }
                })

            }
        </ListGroup>
    }

    const TeamAccordion = () => {
        return <Accordion className='container-fluid'>
            <Accordion.Toggle eventKey="0" style={{backgroundColor: '#d7d8dc'}} className='container accordionToggle'>
                <Row>
                    <Col sm={2} xs={3}><Image src={currentEmployee.avatar} className='mt-2 mb-2' width={50} rounded/></Col>
                    <Col sm={8} xs={7} className="d-flex flex-wrap justify-content-center align-content-center">
                        <span className="employeeName">{currentEmployee.name}</span>
                        <span className="employeePosition">{currentEmployee.position}</span>
                    </Col>
                    <Col className="d-flex flex-wrap justify-content-center align-content-center">
                        <Image src={arrowDown} className='mt-2 mb-2' width={20}/>
                    </Col>
                </Row>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <TeamList/>
            </Accordion.Collapse>
        </Accordion>
    }

    return (
        <Container className='mt-5'>
            <Row className='mb-5'>
                {windowSize ? <Col sm={3} className='mb-5 mt-3'><TeamList/></Col> : <TeamAccordion/>}
                <Col
                    style={!windowSize ? {border: 'none'} : {borderLeft: '#ACCCFB solid 2px'}}
                    className='mb-5 d-flex flex-column justify-content-center'
                >
                    <Row className='mt-3'>
                        <Col md={3} className='ml-3 d-flex justify-content-center'>
                            <div>
                                <Image width={180} className='mt-2' src={currentEmployee.photo} rounded/>
                            </div>

                        </Col>
                        <Col md={8} className='ml-md-3'>
                            {
                                windowSize && <>
                                    <h2>{currentEmployee.name}</h2>
                                    <h6>{currentEmployee.position}</h6>
                                </>
                            }
                            <p className='mt-3'>{currentEmployee.intro}</p>
                            <h6>Area of interests</h6>
                            <p>{currentEmployee.interests}</p>
                            <h6>Methodologies</h6>
                            <p>{currentEmployee.methodologies}</p>
                            <h6>Area of Expertise</h6>
                            {featuresList(currentEmployee.expertise)}
                            <h6 className='mt-4'>Projects</h6>
                            <Row>
                                {currentEmployee.projects.map((elem, index) => {
                                    if (windowSize) {
                                        return <Card className='ml-3 projectCard mt-3' style={{width: '10.5rem'}}>
                                            <Card.Img variant="top" src={elem.image}/>
                                            <Col>
                                                <h6 className='mt-2'>{elem.name}</h6>
                                                <p className='employeePosition mr-2'>{elem.info}</p>
                                            </Col>
                                        </Card>
                                    } else {
                                        return <Row className='projectCard mt-3 ml-3 mr-3'>
                                            <Image className='m-1' fluid src={elem.image}/>
                                            <Col xs={6} className='mt-3'>
                                                <h6 className=''>{elem.name}</h6>
                                                <p className='employeePosition'>{elem.info}</p>
                                            </Col>
                                        </Row>
                                    }
                                })}
                            </Row>
                            <h6 className='mt-4'>Tools</h6>
                            <Row className='ml-0'>
                                {currentEmployee.tools.map((elem, index) => {
                                    return <Image key={index} className='ml-0 mr-3' src={elem}/>
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default TeamPageContent;
