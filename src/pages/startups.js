import * as React from "react";
import MainPageTemplate from "../components/MainPageTemplate"
import "../styles/index.css";
import StartupsPage from '../components/StartupsPage'

const IndexPage = () => {
    return (
        <>
            <MainPageTemplate>
                <StartupsPage />
            </MainPageTemplate>
        </>
    )
}

export default IndexPage
