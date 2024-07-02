const postJobModel = require("../models/postJob-model");

const getAllJobs = async (req, res) => {
  // const { jobLocation, } = req.query;
  // console.log("req query", req.query);

  try {
    const result = await postJobModel.find();
    // console.log(result);
    res.status(200).json(result);
    // console.log("get jobs: ",result);
  } catch (err) {
    res.status(500).json({
      msg: err,
    });
  }
};
const getAllJobsTesting = async (req, res) => {
  // const { salaryType, minPrice, maxPrice } = req.query;
  // console.log(minPrice, "minPrice", typeof minPrice);
  const myData = await postJobModel.find(req.query);

  res.status(200).json({
    status: "success",
    length: myData.length,
    allJobs: myData
  });
};

module.exports = { getAllJobs, getAllJobsTesting };
