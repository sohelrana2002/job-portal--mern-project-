import React from 'react'
import InputLocation from '../InputLocation/InputLocation'
import { useJobDataContext } from '../../../context/JobDataContext'
import './DateOfPosting.css'


const DateOfPosting = () => {
    const { handleRatioInput, selectedCategory } = useJobDataContext();
    // console.log(selectedCategory);

    // ----get from using date function--- 
    const realTime = new Date();
    // console.log(realTime);

    // ----for one days ---
    const oneDay = (24 * 60 * 60 * 1000);

    // ----for twenty days ago--- 
    const twentyFourHoursAgo = new Date(realTime - oneDay);

    // ----for seven days ago ---- 
    const sevenDaysAgo = new Date(realTime - 7*oneDay);

    // ----for thirty days ago--- 
    const thirtyDaysAgo = new Date(realTime - 30*oneDay);
    // console.log(sevenDaysAgo);


    // ====convert date int to string ===== 
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
    // console.log(twentyFourHoursAgoDate);


  return (
    <div className="location__container">
      <h4 className='filter__title'>Date Of Posting</h4>

      <div className='input__location'>
        <label>
          <input
            type="radio"
            name="test"
            value=""
            onChange={handleRatioInput}
          />
          <span></span> All time
        </label>

        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Last 24 hours"
          value={twentyFourHoursAgoDate}
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="7 Days ago"
          value={sevenDaysAgoDate}
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="1 Month ago"
          value={thirtyDaysAgoDate}
        />
      </div>
    </div>
  )
}

export default DateOfPosting