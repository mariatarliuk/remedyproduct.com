import * as React from "react"
import ProjectPageTemplate from "../templates/ProjectPageTemplate"
import {b6aData} from "../resources/texts"
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const B6APage = () => {
    return (
        <>
            <Header/>
            <ProjectPageTemplate
                data={b6aData}
            />
            <Footer/>
        </>
    )
}

export default B6APage
