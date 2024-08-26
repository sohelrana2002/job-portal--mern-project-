import "./PostJobs.css";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JoditEditor from "jodit-react";
import Creatable from "react-select/creatable";

const PostJobs = () => {
  const getEmail = localStorage.getItem("email");

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
    description: "Start Typing",
    email: getEmail,
    shortDes: "",
    skills: [],
  });
  const notify = () => toast("Successfully Submitted");

  const editor = useRef(null);
  const skillOption = [
    {
      value: "c",
      label: "C",
      name: "c",
    },
    {
      value: "c++",
      label: "C++",
      name: "c++",
    },
    {
      value: "java",
      label: "Java",
      name: "java",
    },
    {
      value: "javascript",
      label: "javaScript",
      name: "javascript",
    },
  ];

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserPostJob({
      ...userPostJob,
      [name]: value,
    });
  };

  // console.log(userPostJob);

  const handlePostJobSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`http://localhost:8000/api/post-job`, {
        method: "POST",
        body: JSON.stringify(userPostJob),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.statusText === "OK") {
        toast.success("Successfully submitted!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUserPostJob({
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
          email: "",
          skills: [],
        });
      }

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log("post job", err);
    }
  };

  return (
    <div className="post__job-bg">
      <div className="container post__job">
        <form
          // method="POST"
          className="post__job-form"
          onSubmit={handlePostJobSubmit}
        >
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
                  onChange={postUserData}
                >
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
              <Creatable
                defaultValue={userPostJob.skills}
                onChange={(e) => {
                  setUserPostJob({
                    ...userPostJob,
                    skills: e.map((n) => n.value),
                  });
                }}
                options={skillOption}
                isMulti
              />
            </div>

            {/* ====description==== */}
            <div className="post__job-input">
              <label>Short Description</label>
              <textarea
                rows="5"
                placeholder="Ex: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repudiandae hic error, asperiores earum iste."
                name="shortDes"
                value={userPostJob.shortDes}
                onChange={postUserData}
              />
            </div>
            {/* ====description==== */}
            <div className="post__job-input">
              <label>Description</label>
              <JoditEditor
                className="jodit__editor"
                ref={editor}
                value={userPostJob.description}
                // config={config}
                tabIndex={10} // tabIndex of textarea
                onBlur={(newContent) => {
                  setUserPostJob({
                    ...userPostJob,
                    description: newContent,
                  });
                }} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {
                  setUserPostJob({
                    ...userPostJob,
                    description: newContent,
                  });
                }}
              />
            </div>

            {/* ======email ====== */}
            <div className="post__job-input">
              <label>Job posted by</label>
              <input
                type="email"
                placeholder={getEmail}
                name="email"
                value={userPostJob.email}
                onChange={postUserData}
                disabled
              />
            </div>
          </div>

          {/* ====submit button===== */}
          <button type="submit" className="btn">
            Submit
          </button>
          <ToastContainer className="tostify" />
        </form>
      </div>
    </div>
  );
};

export default PostJobs;
