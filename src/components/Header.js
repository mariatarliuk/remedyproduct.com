import React, {useEffect, useRef} from "react";
import {Image, Nav, Navbar} from "react-bootstrap"
import {commonIcons} from "../resources/images"
import {linksArray, singleLinksArray} from "../resources/links"
import {Link} from "gatsby";
import '../styles/header.css';

const navXs = 'padding-left: 15px; position: absolute; left: 0%; top: 110%; width: 100%; z-index: 200; background: rgba(255, 255, 255, 0.6);'

const NavLinks = () => {
    const newLinksArray = linksArray.map(elem => {
        if (!singleLinksArray.includes(window.location.pathname) && elem.charAt(0) === "#") {
            return `/${elem}`
        }
        return elem
    })

    return (
        newLinksArray.map((elem, index) => {
            return (
                <Nav.Link key={elem + index} as={Link} to={elem}>
                    {linksArray[index].slice(1).charAt(0).toUpperCase() + linksArray[index].slice(2).replace(/([A-Z])/g, ' $1').trim()}
                </Nav.Link>
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
            if (document.documentElement.clientWidth)
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
        <div className="position-relative">
            <Navbar collapseOnSelect expand="lg" className="container mt-3 mb-3 headerStyle">
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
            </Navbar>
            <div className="transparentBg" ref={blurBg}></div>
        </div>  
    )
}

export default Header
