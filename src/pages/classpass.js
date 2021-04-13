import * as React from "react";
import {classpassData} from "../resources/texts";
import CaseLayout from '../templates/CaseLayout'

const ClassPass = ({location}) => {
    return (
        <CaseLayout data={classpassData} location={location}/>
    )
}

export default ClassPass
