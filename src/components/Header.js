import React, {useEffect, useRef, useState} from "react";
import {Image, Nav, Navbar} from "react-bootstrap"
import {commonIcons} from "../resources/images"
import {Link} from "gatsby";
import '../styles/header.css';

const linksArray = ["#learnMore", "#services", "#partners", "#ourWork",
    "/startups", "/investment", "/blog"]

const navXs = 'padding-left: 15px; position: absolute; left: 0%; top: 110%; width: 100%; z-index: 200; background: rgba(255, 255, 255, 0.6);'

const NavLinks = () => {
    return (
        linksArray.map((elem, index) => {
            return (<Link key={elem + index} to={elem} style={{textDecoration: "none"}} >
                    <Nav.Link href={elem} 
                    >
                        {elem.slice(1).charAt(0).toUpperCase() + elem.slice(2).replace(/([A-Z])/g, ' $1').trim()}
                    </Nav.Link></Link>
            )
        })
    )
}

const Header = () => {
    const navEl = useRef();
    const blurBg = useRef();
    const onButtonClick = () => {
        if (!navEl.current.classList.contains('show')) {
            navEl.current.setAttribute('style', navXs);
            blurBg.current.classList.add('blur');
        } else {
            blurBg.current.classList.remove('blur');
        }
  };

    useEffect(() => {
        window.onresize = () => {
            if  (document.documentElement.clientWidth >= 991) {
                navEl.current.setAttribute('style', '');
                blurBg.current.classList.remove('blur');
            } else {
                navEl.current.setAttribute('style', navXs);
                if (navEl.current.classList.contains('show')) blurBg.current.classList.add('blur');
            }
        }
    })

    return (
        <Navbar collapseOnSelect expand="lg" className="container mt-3 mb-3" className='headerStyle'>
            <Navbar.Brand
                className="justify-content-start">
                <Link to="/">
                    <Image src={commonIcons.remedyIcon}/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={onButtonClick}/>
            <Navbar.Collapse id="responsive-navbar-nav" ref={navEl} className='navBlock'>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="justify-content-end">
                    <NavLinks/>
                </Nav>
            </Navbar.Collapse>
            <div className="transparentBg" ref={blurBg}></div>
        </Navbar>
    )
}

export default Header
