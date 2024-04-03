import { useJobDataContext } from "../../../context/JobDataContext";
import InputLocation from "../InputLocation/InputLocation";
import "./Location.css";

const Location = () => {
  const { handleRatioInput, jobs } = useJobDataContext();

  const getLocation = jobs.map((curElem) => {
    return curElem?.jobLocation?.toLowerCase();
  });

  const uniqueGetLocation = ["all", ...new Set(getLocation)];
  // console.log(uniqueGetLocation);

  return (
    <div className="location__container">
      <h4 className="filter__title">Location</h4>

      <div className="input__location">
        {uniqueGetLocation &&
          uniqueGetLocation.map((curElem, i) => {
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

export default Location;
