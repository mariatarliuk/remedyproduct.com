import * as React from "react";
import {mbamissionData} from "../resources/texts";
import CaseLayout from '../templates/CaseLayout'

const MbaMission = ({location}) => {
    return (
        <CaseLayout data={mbamissionData} location={location}/>
    )
}

export default MbaMission
