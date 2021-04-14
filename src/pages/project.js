import * as React from "react";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import "../styles/index.css";
import ProjectPageTemplate from '../templates/ProjectPageTemplate'

const CasesPage = ({pageContext, location}) => {
    return (
        <>
            <Header path={location.pathname}/>
            <ProjectPageTemplate data={pageContext} />
            <Footer />
        </>
    )
}

export default CasesPage
