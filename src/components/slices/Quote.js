import React from 'react'
import { RichText } from 'prismic-reactjs'
import {Container} from "react-bootstrap";

export default ({ slice }) => (
  <Container>
    <blockquote>{RichText.asText(slice.primary.quote.raw)}</blockquote>
  </Container>
)
