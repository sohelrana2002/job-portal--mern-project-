import Location from './Location/Location'
import Saralry from './Saralry/Saralry'
import DateOfPosting from './DateOfPosting/DateOfPosting'
import WorkExprience from './WorkExprience/WorkExprience'
import EmployementType from './EmployementType/EmployementType'

import './SideBarJobs.css'

const SideBarJobs = () => {
  return (
    <div className="sidebar__jobs">
        <h3 className="jobs__title">Filter</h3>
        <Location />
        <Saralry />
        <DateOfPosting />
        <WorkExprience />
        <EmployementType />
    </div>
  )
}

export default SideBarJobs