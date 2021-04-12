import * as React from "react"
import {Card} from "react-bootstrap"
import Link from "gatsby-link";
import "../../styles/companyInfo.css";

export function featuresList(featuresArray) {
    console.log(featuresArray)
    return featuresArray.map((elem, index) => {
        return (
            <span
                key={elem + index}
                className="projectFeaturesItem mr-2 mt-1">
                {elem}
            </span>
        )
    })
}

function ProductPictureBlock({productName, picture, featuresArray, width}) {
    return (
        <Card style={{width: width, overflow: 'hidden'}} className={`ml-3 mr-3 mt-5`}>
            <Link to={`/cases/taproom`} className="caseLink">
                <Card.Img variant="top" src={picture} className="caseImg"/>
            </Link>
            <Card.Body>
                <Card.Title className="caseTitle">{productName}</Card.Title>
                <Card.Text className="d-flex flex-wrap pt-0">
                    {featuresList(featuresArray)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductPictureBlock
