import * as React from "react";
import MainContent from '../components/mainPageContent'

import MainPageTemplate from "../components/MainPageTemplate"
import {Col, Container, Row} from "react-bootstrap"

const IndexPage = () => {
  return (
      <Container fluid>
              <MainPageTemplate/>
      <MainContent />
      <main style={pageStyles}>
    </main>
      </Container>
    <>
 
  )
}

export default IndexPage
