import Location from './Location'

import './SideBarJobs.css'

const SideBarJobs = () => {
  return (
    <div className="sidebar__jobs">
        <h3 className="jobs__title">Filter</h3>

        <Location />
    </div>
  )
}

export default SideBarJobs