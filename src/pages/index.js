import * as React from "react";
import MainContent from '../components/mainPageContent'
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
