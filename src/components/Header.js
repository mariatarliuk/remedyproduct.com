import React from "react";
import {Image, Nav, Navbar} from "react-bootstrap"
import {commonIcons} from "../resources/images"
import {Link} from "gatsby";

const linksArray = ["#learnMore", "#services", "#partners", "#ourWork",
    "/startups", "/investment", "/blog"]

const headerStyle = {
        position: 'relative',
        zIndex: 100
}

const navBlock = {
    position: 'absolute',
    left: '0%',
    top: '47%',
    width: '100%',
    zIndex: 200
}

const navXs = 'padding-left: 15px; position: absolute; left: 0%; top: 110%; width: 100%; z-index: 200; background: rgba(255, 255, 255, 0.6);'

function clickToggle() {
    if (!document.querySelector('.navbar-collapse').classList.contains('show')) {
       if (document.querySelector('.mainContainer')) document.querySelector('.mainContainer').setAttribute('style','filter: blur(4px);');
       document.querySelector('#responsive-navbar-nav').setAttribute('style', navXs);
    } else {
        document.querySelector('.mainContainer').setAttribute('style', '');
    }
}

function changeBgBlur() {
    if(document.querySelector('.mainContainer')) {
        document.querySelector('.mainContainer').setAttribute('style', '');
    }
}

const NavLinks = () => {
    return (
        linksArray.map((elem, index) => {
            return (<Link key={elem + index} to={elem} style={{textDecoration: "none"}} >
                    <Nav.Link href={elem} onClick={changeBgBlur}>
                        {elem.slice(1).charAt(0).toUpperCase() + elem.slice(2).replace(/([A-Z])/g, ' $1').trim()}
                    </Nav.Link></Link>
            )
        })
    )
}

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="container mt-3 mb-3" style={headerStyle}>
            <Navbar.Brand
                className="justify-content-start">
                <Link to="/">
                    <Image src={commonIcons.remedyIcon}/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={clickToggle}/>
            <Navbar.Collapse id="responsive-navbar-nav" style={navBlock}>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="justify-content-end">
                    <NavLinks/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
