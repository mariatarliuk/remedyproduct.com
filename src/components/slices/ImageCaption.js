import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import {Container} from "react-bootstrap";

// Default Image
const DefaultImage = ({ slice }) => (
  <Container className="">
    <figcaption className="block-img">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="image-label">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
    </figcaption>
  </Container>
)

// Emphasized Image
const EmphasizedImage = ({ slice }) => (
  <Container className="">
    <figcaption className="">
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <figcaption className="">
          {RichText.asText(slice.primary.caption.raw)}
        </figcaption>
        ) : null}
    </figcaption>
  </Container>
)

// Full Width Image
const FullWidthImage = ({ slice }) => (
  <Container
    className=""
    style={{ backgroundImage: `url(${slice.primary.image.url})` }}
  >
    <Container className="">
      {slice.primary.caption
      && RichText.asText(slice.primary.caption.raw) !== '' ? (
        <span className="">
          {RichText.asText(slice.primary.caption.raw)}
        </span>
        ) : null}
    </Container>
  </Container>
)

// Function to determine the image type
const renderSwitch = (slice) => {
    console.log(slice.slice_label)
  switch (slice.slice_label) {
    case 'image-full-width':
      return <FullWidthImage slice={slice} />
    case 'emphasized':
      return <EmphasizedImage slice={slice} />
    default:
      return <DefaultImage slice={slice} />
  }
}

export default ({ slice }) => <>{renderSwitch(slice)}</>
