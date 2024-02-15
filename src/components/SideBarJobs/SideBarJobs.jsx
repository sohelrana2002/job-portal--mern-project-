import Location from './Location/Location'
import Saralry from './Saralry/Saralry'
import DateOfPosting from './DateOfPosting/DateOfPosting'

import './SideBarJobs.css'

const SideBarJobs = () => {
  return (
    <div className="sidebar__jobs">
        <h3 className="jobs__title">Filter</h3>
        <Location />
        <Saralry />
        <DateOfPosting />
    </div>
  )
}

export default SideBarJobs