const postJobModel = require("../models/postJob-model");

const getAllJobs = async (req, res) => {
  const { location, salary, exprience, employeement, name } = req.query;
  const queryObj = {};

  if (location) {
    queryObj.jobLocation = location;
  }

  if (salary) {
    queryObj.salaryType = salary;
    console.log(queryObj.salaryType, "queryObj.salaryType");
  }

  if (name) {
    queryObj.companyName = name;
  }

  console.log(queryObj);
  const myData = await postJobModel.find(queryObj);

  res.status(200).json({
    status: "success",
    length: myData.length,
    allJobs: myData,
  });
};


// ---------for testing route----
const getAllJobsTesting = async (req, res) => {
  const { location, salary, exprience, employeement, name } = req.query;
  const queryObj = {};

  if (location) {
    queryObj.jobLocation = location;
  }

  if (salary) {
    queryObj.salaryType = salary;
    console.log(queryObj.salaryType, "queryObj.salaryType");
  }

  if (name) {
    queryObj.companyName = name;
  }

  console.log(queryObj);
  const myData = await postJobModel.find(queryObj);

  res.status(200).json({
    status: "success",
    length: myData.length,
    allJobs: myData,
  });
};

module.exports = { getAllJobs, getAllJobsTesting };
