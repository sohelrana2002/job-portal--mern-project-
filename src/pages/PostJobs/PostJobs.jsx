import React from "react";

import "./PostJobs.css";

const PostJobs = () => {
  return (
    <div className="container post__job">
      <form className="post__job-form">
        {/* =======post job top==== */}
        <div className="post__job-top">
          <div className="post__job-left">
            {/* ====company name==== */}
            <div className="post__job-input">
              <label>Company Name</label>
              <input type="text" placeholder="Ex: Google" />
            </div>

            {/* ====minumum salary==== */}
            <div className="post__job-input">
              <label>Minimum Salary</label>
              <input type="text" placeholder="Ex: $20k" />
            </div>

            {/* ====salary type==== */}
            <div className="post__job-input">
              <label>Salary Type</label>
              <select>
                <option>Choose your salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            {/* ====job posting date==== */}
            <div className="post__job-input">
              <label>Job Posting date</label>
              <input type="date" />
            </div>

            {/* ====company logo==== */}
            <div className="post__job-input">
              <label>Company Logo</label>
              <input type="url" placeholder="Ex: Paste your images url" />
            </div>
          </div>
          <div className="post__job-right">
            {/* ====job title=== */}
            <div className="post__job-input">
              <label>Job Title</label>
              <input type="text" placeholder="Ex: Web Development" />
            </div>

            {/* ====maximum salary==== */}
            <div className="post__job-input">
              <label>Maximum Salary</label>
              <input type="text" placeholder="Ex: $200k" />
            </div>

            {/* ====location==== */}
            <div className="post__job-input">
              <label>Job Location</label>
              <input type="text" placeholder="Ex: United State" />
            </div>

            {/* ====exprience level==== */}
            <div className="post__job-input">
              <label>Experience Level</label>
              <select>
                <option>Select your experience level</option>
                <option value="Any experience">Any experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>

            {/* ==== exployement types==== */}
            <div className="post__job-input">
              <label>Employment Type</label>
              <select>
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
