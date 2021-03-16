import * as React from "react"
import ProjectPageTemplate from "../components/ProjectPageTemplate"
import {classpassPageData} from "../resources/texts"
import Header from "../components/Header";
import Footer from "../components/Footer";

const ClasspassPage = () => {
    return (
        <>
            <Header/>
            <ProjectPageTemplate
                data={classpassPageData}
            />
            <Footer/>
        </>
    )
}

export default ClasspassPage
