import * as React from "react";
import {b6aData} from "../resources/texts";
import CaseLayout from '../templates/CaseLayout'

const B6A = ({location}) => {
    return (
        <CaseLayout data={b6aData} location={location}/>
    )
}

export default B6A
