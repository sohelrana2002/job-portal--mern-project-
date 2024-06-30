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
  const myData = await postJobModel.find({ employmentType: "Full-time" });

  res.status(200).json({ myData });
};

module.exports = { getAllJobs, getAllJobsTesting };
