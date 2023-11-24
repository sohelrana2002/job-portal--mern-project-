import { useJobDataContext } from '../../context/JobDataContext'

import SearchBar from '../../helper/SearchBar/SearchBar'
import './Banner.css'

const Banner = () => {
    const { jobs } =useJobDataContext();
  return (
        <div className="container banner__container">
            <div className="banner-find__job">
                <h3 className="find__job-heading">
                    Find you <span>new job</span> today
                </h3>
                <span className='sub__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, repellendus.</span>
            </div>
            <SearchBar />
            {
                console.log(jobs)
            }
        </div>
  )
}

export default Banner