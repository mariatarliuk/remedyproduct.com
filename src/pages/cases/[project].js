import * as React from "react";
import {ritualData} from "../../resources/texts";
import {mbamissionData} from "../../resources/texts";
import {classpassData} from '../../resources/texts';
import {taproomData} from '../../resources/texts';
import {walkliData} from '../../resources/texts';
import {blocksixanalyticsData} from '../../resources/texts';
import CaseLayout from '../../templates/CaseLayout'

const Project = ({path, location}) => {
    const dataIn = {
        ritual: {...ritualData},
        mbamission: {...mbamissionData},
        classpass: {...classpassData},
        taproom: {...taproomData},
        walkli: {...walkliData},
        blocksixanalytics: {...blocksixanalyticsData}
    }
    
    return (
        <CaseLayout data={dataIn[location.pathname.replace('/cases/', '')]} location={location}/>
    )
}
    
export default Project