import React from "react";
import { useJobDataContext } from "../../../context/JobDataContext";
import InputLocation from "../InputLocation/InputLocation";

const WorkExprience = () => {
  const { handleRatioInput, jobs } = useJobDataContext();

  const getWorkExprience = jobs.map((curElem) => curElem.experienceLevel);
  const uniqueGetWorkExprience = [...new Set(getWorkExprience)];
  // console.log(uniqueGetWorkExprience);

  return (
    <div className="location__container">
      <h4 className="filter__title">Work Exprience</h4>

      <div className="input__location">
        {uniqueGetWorkExprience &&
          uniqueGetWorkExprience.map((curElem, i) => {
            return (
              <InputLocation key={i}
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

export default WorkExprience;
