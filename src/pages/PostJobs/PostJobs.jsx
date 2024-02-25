import React, { useState } from "react";

import "./PostJobs.css";

const PostJobs = () => {
  const [userPostJob, setUserPostJob] = useState({
    companyName: "",
    jobTitle: "",
    companyLogo: "",
    minPrice: "",
    maxPrice: "",
    salaryType: "",
    jobLocation: "",
    postingDate: "",
    experienceLevel: "",
    employmentType: "",
    description: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserPostJob({
      ...userPostJob,
      [name]: value,
    });
  };

  console.log(userPostJob);

  return (
    <div className="container post__job">
      <form className="post__job-form">
        {/* =======post job top==== */}
        <div className="post__job-top">
          <div className="post__job-left">
            {/* ====company name==== */}
            <div className="post__job-input">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Ex: Google"
                name="companyName"
                value={userPostJob.companyName}
                onChange={postUserData}
              />
            </div>

            {/* ====minumum salary==== */}
            <div className="post__job-input">
              <label>Minimum Salary</label>
              <input
                type="text"
                placeholder="Ex: $20k"
                name="minPrice"
                value={userPostJob.minPrice}
                onChange={postUserData}
              />
            </div>

            {/* ====salary type==== */}
            <div className="post__job-input">
              <label>Salary Type</label>
              <select
                name="salaryType"
                value={userPostJob.salaryType}
                onChange={postUserData}
              >
                <option>Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            {/* ====job posting date==== */}
            <div className="post__job-input">
              <label>Job Posting date</label>
              <input
                type="date"
                name="postingDate"
                value={userPostJob.postingDate}
                onChange={postUserData}
              />
            </div>

            {/* ====company logo==== */}
            <div className="post__job-input">
              <label>Company Logo</label>
              <input
                type="url"
                placeholder="Ex: Paste your images url"
                name="companyLogo"
                value={userPostJob.companyLogo}
                onChange={postUserData}
              />
            </div>
          </div>
          <div className="post__job-right">
            {/* ====job title=== */}
            <div className="post__job-input">
              <label>Job Title</label>
              <input
                type="text"
                placeholder="Ex: Web Development"
                name="jobTitle"
                value={userPostJob.jobTitle}
                onChange={postUserData}
              />
            </div>

            {/* ====maximum salary==== */}
            <div className="post__job-input">
              <label>Maximum Salary</label>
              <input
                type="text"
                placeholder="Ex: $200k"
                name="maxPrice"
                value={userPostJob.maxPrice}
                onChange={postUserData}
              />
            </div>

            {/* ====location==== */}
            <div className="post__job-input">
              <label>Job Location</label>
              <input
                type="text"
                placeholder="Ex: United State"
                name="jobLocation"
                value={userPostJob.jobLocation}
                onChange={postUserData}
              />
            </div>

            {/* ====exprience level==== */}
            <div className="post__job-input">
              <label>Experience Level</label>
              <select
                name="experienceLevel"
                value={userPostJob.experienceLevel}
                onChange={postUserData}
              >
                <option>Select your experience level</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>

            {/* ==== exployement types==== */}
            <div className="post__job-input">
              <label>Employment Type</label>
              <select 
                name="employmentType"
                value={userPostJob.employmentType}
                onChange={postUserData}>
                <option>Select your jon type</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-time">Part-time</option>
                <option value="Full-time">Full-time</option>
              </select>
            </div>
          </div>
        </div>

        {/* =====post job bottom=== */}
        <div className="post__job-bottom">
          {/* ====required skilled set==== */}
          <div className="post__job-input">
            <label>Required Skill Sets</label>
            <input type="date" />
          </div>

          {/* ====description==== */}
          <div className="post__job-input">
            <label>Description</label>
            <textarea
              rows="10"
              placeholder="Ex: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae hic error, asperiores earum iste."
              name="description"
              value={userPostJob.description}
              onChange={postUserData}
            />
          </div>
        </div>

        {/* ====submit button===== */}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostJobs;
