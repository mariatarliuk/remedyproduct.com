import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import { ImageCaption, Quote, Text } from '../components/slices'

export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        date
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

const PostSlices = ({ slices }) =>
    slices.map((slice, index) => {
        const res = (() => {
            switch (slice.slice_type) {
                case 'text':
                    return (
                        <div key={index} className="homepage-slice-wrapper">
                            <Text slice={slice} />
                        </div>
                    )

                case 'quote':
                    return (
                        <div key={index} className="homepage-slice-wrapper">
                            <Quote slice={slice} />
                        </div>
                    )

                case 'image_with_caption':
                    return (
                        <div key={index} className="homepage-slice-wrapper">
                            <ImageCaption slice={slice} />
                        </div>
                    )

                default:
            }
        })()
        return res
    })

const PostBody = ({ blogPost }) => {
    return (
        <div>
            <div className="container post-header">
                <div className="back">
                    <Link to="/blog">back to list</Link>
                </div>
                <h1>
                    {RichText.asText(blogPost.title.raw).length !== 0
                        ? RichText.asText(blogPost.title.raw)
                        : 'Untitled'}
                </h1>
            </div>
            <PostSlices slices={blogPost.body} />
        </div>
    )
}

export const Post = ({ data }) => {
    if (!data) return null
    const post = data.prismicPost.data

    return (
        <>
            <PostBody blogPost={post} />
        </>
    )
}

export default withPreview(Post)
