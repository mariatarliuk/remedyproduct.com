import * as React from "react";
import {walkliData} from "../resources/texts";
import CaseLayout from '../templates/CaseLayout'

const Walkli = ({location}) => {
    return (
        <CaseLayout data={walkliData} location={location}/>
    )
}

export default Walkli
