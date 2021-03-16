import * as React from "react";
import MainContent from '../components/MainPageContent'
import MainPageTemplate from "../components/MainPageTemplate"
import "../styles/index.css"

const IndexPage = () => {
    return (
        <>
            <MainPageTemplate>
                <MainContent/>
            </MainPageTemplate>
        </>
    )
}

export default IndexPage
