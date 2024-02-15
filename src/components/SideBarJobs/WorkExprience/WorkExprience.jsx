import React from 'react'
import { useJobDataContext } from '../../../context/JobDataContext'
import InputLocation from '../InputLocation/InputLocation'

const WorkExprience = () => {
    const { handleRatioInput } = useJobDataContext();
  return (
    <div className="location__container">
    <h4 className='filter__title'>Work Exprience</h4>

    <div className='input__location'>
      <label>
        <input
          type="radio"
          name="test"
          value=""
          onChange={handleRatioInput}
        />
        <span></span> Any experience
      </label>

      <InputLocation
        handleRatioInput={handleRatioInput}
        name="test"
        title="Internship"
        value="Internship"
      />
      <InputLocation
        handleRatioInput={handleRatioInput}
        name="test"
        title="Work remotely"
        value="Work remotely"
      />
    </div>
  </div>
  )
}

export default WorkExprience