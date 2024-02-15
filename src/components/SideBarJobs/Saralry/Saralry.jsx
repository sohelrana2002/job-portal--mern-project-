import { useJobDataContext } from "../../../context/JobDataContext";
import Salary from "../../../helper/Button/Button";
import InputLocation from "../InputLocation/InputLocation";
import "./Saralry.css";

const Saralry = () => {
  const { handleRatioInput, handleButtonInput } = useJobDataContext();
  
  return (
    <div className="salary">
      <h4 className="filter__title">Salary</h4>

      <div className="salary__button">
        <Salary
          handleButtonInput={handleButtonInput}
          value="hourly"
          title="Hourly"
        />
        <Salary
          handleButtonInput={handleButtonInput}
          value="monthly"
          title="Monthly"
        />
        <Salary
          handleButtonInput={handleButtonInput}
          value="yearly"
          title="Yearly"
        />
      </div>

      <div className="salary__price input__location">
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
          title="< $30k"
          value={30}
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="< $50k"
          value={50}
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="< $80k"
          value={80}
        />
        <InputLocation
          handleRatioInput={handleRatioInput}
          name="test"
          title="< $120k"
          value={120}
        />
      </div>
    </div>
  );
};

export default Saralry;
