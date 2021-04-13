import * as React from "react";
import {ritualData} from "../../resources/texts";
import {mbamissionData} from "../../resources/texts";
import {classpassPageData} from '../../resources/texts';
import {taproomData} from '../../resources/texts';
import {walkliData} from '../../resources/texts';
import {b6aData} from '../../resources/texts';
import CaseLayout from '../../templates/CaseLayout'

const Project = ({path, location}) => {
    const dataIn = {
        ritual: {...ritualData},
        mbamission: {...mbamissionData},
        classpass: {...classpassPageData},
        taproom: {...taproomData},
        walkli: {...walkliData},
        bsixanalytics: {...b6aData}
    }
    console.log(location.pathname)
    return (
        <CaseLayout data={dataIn[location.pathname.replace('/cases/', '')]} location={location}/>
    )
}
    
export default Project