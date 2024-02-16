import InputLocation from '../InputLocation/InputLocation'
import { useJobDataContext } from '../../../context/JobDataContext'
import './EmployementType.css'

const EmployementType = () => {
    const { handleRatioInput } = useJobDataContext();

  return (
    <div className="location__container">
      <h4 className='filter__title'>Type of employemt</h4>

      <div className='input__location'>
        <label>
          <input
            type="radio"
            name="test"
            value=""
            onChange={handleRatioInput}
          />
          <span></span> All
        </label>

        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Part-time"
          value="Part-time"
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Full-time"
          value="Full-time"
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Temporary"
          value="Temporary"
        />
      </div>
    </div>
  )
}

export default EmployementType