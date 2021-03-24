import React, {useEffect, useRef, useState} from "react";
import {Image, Nav, Navbar} from "react-bootstrap";
import {commonIcons} from "../../resources/images";
import {linksArray, singleLinksArray} from "../../resources/links";
import {Link} from "gatsby";
import '../../styles/header.css';

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
                <Nav.Link eventKey={index} key={elem + index} as={Link} to={elem}>
                    {linksArray[index].slice(1).charAt(0).toUpperCase() + linksArray[index].slice(2).replace(/([A-Z])/g, ' $1').trim()}
                </Nav.Link>
            )
        })
    )
}

const Header = () => {
    const blurBg = useRef(null);  
    const nav = useRef(null);
    const collapse = useRef(null);
    const [navExpanded, setNavExpanded] = useState(false);

    const removeBlurBg = () => {
        blurBg.current.classList.remove('blur');
    }

    const hendleButtonClick = () => {
        if (!collapse.current.classList.contains('show')) {
            collapse.current.setAttribute('style', navXs);
            blurBg.current.classList.add('blur');
        } else {
            removeBlurBg();
        }
    };



    const handleDocumentClick = (e) => {
        if (e.target !== nav.current && !nav.current.contains(e.target)) {
            setNavExpanded(false);
        }
        removeBlurBg();
    }   

    useEffect(() => {
        window.onresize = () => {
            if (document.documentElement.clientWidth)
            if  (document.documentElement.clientWidth >= 991) {
                collapse.current.setAttribute('style', '');
                removeBlurBg();
            } else {
                collapse.current.setAttribute('style', navXs);
                if (collapse.current.classList.contains('show')) blurBg.current.classList.add('blur');
            }
        }
        window.addEventListener('click', handleDocumentClick, true)
        return () => window.removeEventListener('click', handleDocumentClick, true)
    }, [])



    return (
        <div className="position-relative">
            <Navbar 
                collapseOnSelect expand="lg" 
                className="container mt-3 mb-3 headerStyle"
                onToggle={setNavExpanded}
                expanded={navExpanded}
                ref={nav}>
                    <Navbar.Brand
                        className="justify-content-start">
                        <Link to="/">
                            <Image src={commonIcons.remedyIcon}/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={hendleButtonClick}/>
                    <Navbar.Collapse 
                        id="responsive-navbar-nav" 
                        ref={collapse} 
                        className='navBlock' 
                        onClick={removeBlurBg}>
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
