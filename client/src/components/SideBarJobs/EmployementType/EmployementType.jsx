import InputLocation from "../InputLocation/InputLocation";
import { useJobDataContext } from "../../../context/JobDataContext";
import "./EmployementType.css";

const EmployementType = () => {
  const { handleRatioInput, jobs } = useJobDataContext();

  const getEmployeeType = jobs.map((curElem) => curElem.employmentType);

  const uniqueGetEmployeeType = ["all", ...new Set(getEmployeeType)];
  // console.log(uniqueGetEmployeeType);

  return (
    <div className="location__container">
      <h4 className="filter__title">Type of employemt</h4>

      <div className="input__location">
        {uniqueGetEmployeeType &&
          uniqueGetEmployeeType.map((curElem, i) => {
            return (
              <InputLocation
                key={i}
                handleRatioInput={handleRatioInput}
                name="test"
                title={curElem}
                value={curElem}
              />
            );
          })}
      </div>
    </div>
  );
};

export default EmployementType;
