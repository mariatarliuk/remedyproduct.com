import * as React from "react"
import ProjectPageTemplate from "../templates/ProjectPageTemplate"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const CaseLayout = ({data, location}) => {
    return (
        <>
            <Header
                path={location.pathname}
            />
            <ProjectPageTemplate
                data={data}
            />
            <Footer/>
        </>
    )
}

export default CaseLayout