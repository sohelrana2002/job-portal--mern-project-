import "./JobDetails.css";
import { useJobDataContext } from "../../context/JobDataContext";
import Loading from "../../shared/Loading/Loading";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import HTMLReactParser from 'html-react-parser';


const API = "http://localhost:8000/api/all-jobs";

const JobDetails = () => {
  const { getJobDetailsData, isLoading, jobDetails } = useJobDataContext();
  const { id } = useParams();

  useEffect(() => {
    getJobDetailsData(`${API}/${id}`);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  // console.log(jobDetails);

  return (
    <div className="container job__details-container">
      <p className="jobs__title-details">Job Details</p>
      <div className="job__details-box">
        <div className="left-box">
          <div className="company__logo-box">
            <img src={jobDetails.companyLogo} alt="logo" />
          </div>
          <p className="sub__title">
            <span className="filter__title">Skills: </span>
            {jobDetails.skills}
          </p>

          <p className="sub__title">
            <span className="filter__title">Experience Level: </span>
            {jobDetails.experienceLevel}
          </p>
          <p className="sub__title">
            <span className="filter__title">Employment Type: </span>
            {jobDetails.employmentType}
          </p>
          <p className="sub__title">
            <span className="filter__title">Email: </span>
            {jobDetails.email}
          </p>
          <p className="sub__title">
            <span className="filter__title">Posting Date: </span>
            {jobDetails.postingDate}
          </p>
        </div>
        <div className="right-box">
          <p className="sub__title">
            <span className="filter__title">Job Title: </span>
            {jobDetails.jobTitle}
          </p>
          <p className="sub__title">
            <span className="filter__title">Company Name: </span>
            {jobDetails.companyName}
          </p>

          {/* <p className="sub__title">
            <span className="filter__title">Description: </span>
            {jobDetails.description}
          </p> */}
          
          <div>
            <p className="filter__title">Description</p>
            {HTMLReactParser(`${jobDetails.description}`)}
          </div>


          <p className="sub__title">
            <span className="filter__title">Salary Type: </span>
            {jobDetails.salaryType}
          </p>

          <div className="price">
            <p className="sub__title">
              <span className="filter__title">Minimum Price: </span>
              {jobDetails.minPrice}
            </p>
            <p className="sub__title">
              <span className="filter__title">Maximum Price: </span>
              {jobDetails.maxPrice}
            </p>
          </div>

          <p className="sub__title">
            <span className="filter__title">Location: </span>
            {jobDetails.jobLocation}
          </p>
          
          <p className="sub__title-box">
            <span className="filter__title">Drop your CV on this mail: {jobDetails.email} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
