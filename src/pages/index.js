import * as React from "react";
import MainContent from '../components/mainPageContent'

import MainPageTemplate from "../components/MainPageTemplate"
import {Container} from "react-bootstrap"

const IndexPage = () => {
    return (
        <Container fluid>
            <MainPageTemplate>
                <MainContent/>
            </MainPageTemplate>
        </Container>
    )
}

export default IndexPage
