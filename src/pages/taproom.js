import * as React from "react";
import {taproomData} from "../resources/texts";
import CaseLayout from '../templates/CaseLayout'

const Taproom = ({location}) => {
    return (
        <CaseLayout data={taproomData} location={location}/>
    )
}

export default Taproom
