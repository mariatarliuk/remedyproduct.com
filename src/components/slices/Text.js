import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'
import {Container} from "react-bootstrap";

export default ({ slice }) => (
  <Container className="mt-5">
      <RichText
        render={slice.primary.text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
  </Container>
)
