import * as React from "react";
import MainPageTemplate from "../components/MainPageTemplate"
import "../styles/index.css";
import InvestmentPage from '../components/InvestmentPage'

const IndexPage = () => {
    return (
        <>
            <MainPageTemplate>
                <InvestmentPage />
            </MainPageTemplate>
        </>
    )
}

export default IndexPage
