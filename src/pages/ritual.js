import * as React from "react";
import {ritualData} from "../resources/texts";
import CaseLayout from '../templates/CaseLayout'

const Ritual = ({location}) => {
    return (
        <CaseLayout data={ritualData} location={location}/>
    )
}

export default Ritual
