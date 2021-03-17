import React from 'react'
import {Link} from 'gatsby'
import {RichText, Date} from 'prismic-reactjs'
import {Col, Container, Image, Row} from "react-bootstrap";
import "../styles/blogPosts.css"

const firstParagraph = (post) => {
    const firstTextSlice = post.body.find((slice) => slice.slice_type === 'text')
    if (firstTextSlice != null) {
        const textLimit = 600
        const text = RichText.asText(firstTextSlice.primary.text.raw)
        const limitedText = text.substring(0, textLimit)

        if (text.length > textLimit) {
            return (
                <p>{`${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`}</p>
            )
        }
        return <p>{text}</p>
    }
}

const PostSummary = ({post, id}) => {
    return (
        <Container fluid className="d-flex flex-wrap justify-content-center mt-5" key={id}>
            <Container className="d-flex flex-wrap justify-content-center">
                <h4 className="title">
                    {RichText.asText(post.node.data.title.raw).length !== 0
                    && RichText.asText(post.node.data.title.raw)
                    }
                </h4>
                <p style={{textAlign: "center"}}>{RichText.asText(post.node.data.title_text.raw).length !== 0
                && RichText.asText(post.node.data.title_text.raw)}</p>
            </Container>
            <Image src={post.node.data.title_image.url}/>
            <Container className={"mt-4 d-flex flex-wrap justify-content-center"}>
                <Col xl={10} sm={12}>{firstParagraph(post.node.data)}</Col>
            </Container>
            <Link className="readLink mt-3" to={post.node.url}>READ MORE</Link>
        </Container>
    )
}

export default ({posts}) => {
    if (!posts) return null
    return (
        <Container>
            {posts.map((post) => (
                <PostSummary post={post} key={post.node.id}/>
            ))}
        </Container>
    )
}
