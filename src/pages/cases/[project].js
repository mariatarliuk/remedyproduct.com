import * as React from "react";
import {ritualData, mbamissionData, classpassData, taproomData, walkliData, b6aData} from "../../resources/texts";
import CaseLayout from '../../templates/CaseLayout'

const Project = ({path, location}) => {
    const dataIn = {
        ritual: {...ritualData},
        mbamission: {...mbamissionData},
        classpass: {...classpassData},
        taproom: {...taproomData},
        walkli: {...walkliData},
        blocksixanalytics: {...b6aData}
    }

    return (
        <CaseLayout data={dataIn[location.pathname.replace('/cases/', '')]} location={location}/>
    )
}

export default Project
