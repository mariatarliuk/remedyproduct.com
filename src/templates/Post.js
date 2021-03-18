import React from 'react'
import {graphql} from 'gatsby'
import {RichText} from 'prismic-reactjs'
import {withPreview} from 'gatsby-source-prismic'
import {ImageCaption, Quote, Text} from '../components/slices'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {PostSummary} from "../components/BlogPosts"
import {Container, Image, Row} from "react-bootstrap";
import "../styles/blogPosts.css"

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        title_image {
                alt
                url
            }
            title_text {
            raw
            }
            title {
              raw
            }
        body {
          ... on PrismicPostBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPostBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              image {
                alt
                url
              }
              caption {
                raw
              }
            }
          }
        }
      }
    }
  }
`

const PostSlices = ({slices}) =>
    slices.map((slice, index) => {
        console.log(slice.primary.image)
        return (() => {
            switch (slice.slice_type) {
                case 'text':
                    return (
                        <Text key={index} slice={slice}/>
                    )

                case 'quote':
                    return (
                        <Quote key={index} slice={slice}/>
                    )

                case 'image_with_caption':
                    return (
                        <Image className="mt-5" key={index} width={1080} src={slice.primary.image.url}/>
                    )

                default:
            }
        })()
    })

const PostBody = ({blogPost, id}) => {
    return (
        <>
            <Container fluid className="d-flex flex-wrap justify-content-center mt-5"
                       key={id}>
                <Container className="d-flex flex-wrap justify-content-center">
                    <h4 className="title">
                        {RichText.asText(blogPost.title.raw).length !== 0
                        && RichText.asText(blogPost.title.raw)
                        }
                    </h4>
                    <p style={{textAlign: "center"}}>{RichText.asText(blogPost.title_text.raw).length !== 0
                    && RichText.asText(blogPost.title_text.raw)}</p>
                </Container>
                <Image src={blogPost.title_image.url}/>
            </Container>
            <Container className="postText d-flex flex-wrap justify-content-center">
                <PostSlices slices={blogPost.body}/>
            </Container>

        </>
    )
}

export const Post = ({data}) => {
    if (!data) return null
    const post = data.prismicPost.data
    return (
        <>
            <Header/>
            <PostBody blogPost={post} id={data.prismicPost.data.id}/>
            <Footer/>
        </>
    )
}

export default withPreview(Post)
