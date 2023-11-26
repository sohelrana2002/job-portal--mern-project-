import { useJobDataContext } from '../../../context/JobDataContext'
import InputLocation from '../InputLocation/InputLocation';
import './Location.css'

const Location = () => {
    const { handleRatioInput } = useJobDataContext();


  return (
    <div className="location__container">
      <h4 className='filter__title'>Location</h4>

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
          title="London"
          value="london"
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Brussels"
          value="brussels"
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="San Francisco"
          value="san francisco"
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Seattle"
          value="seattle"
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Boston"
          value="boston"
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="Madrid"
          value="madrid"
        />
      </div>
    </div>
  );
}

export default Location