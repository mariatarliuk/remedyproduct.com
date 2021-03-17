import React from 'react'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import BlogPosts from '../components/BlogPosts'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container} from "react-bootstrap";

export const query = graphql`
  query MyQuery {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title_text {
            raw
            }
            title {
              raw
            }
            date
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const Homepage = ({ data }) => {
    if (!data) return null
    const posts = data.allPrismicPost.edges
    console.log(data)

    return (
        <>
            <Header/>
            <Container><h3 style={{textAlign:"center"}} className="mt-5">RoadmApp</h3></Container>
            <BlogPosts posts={posts} />
            <Footer/>
        </>
    )
}

export default withPreview(Homepage)
