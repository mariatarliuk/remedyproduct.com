import React from "react";
import {Image, Nav, Navbar} from "react-bootstrap"
import {commonIcons} from "../resources/images"

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="container mt-3 mb-3">
            <Navbar.Brand className="justify-content-start" href="/"><Image src={commonIcons.remedyIcon}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#learnMore">Learn more</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#partners">Partners</Nav.Link>
                        <Nav.Link href="#ourWork">Our Work</Nav.Link>
                        <Nav.Link href="/startups">Startups</Nav.Link>
                        <Nav.Link href="/investment">Investment</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
