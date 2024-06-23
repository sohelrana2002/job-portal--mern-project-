const postJobModel = require("../models/postJob-model");

const getAllJobs = async (req, res) => {
  // const { jobLocation, } = req.query;
  // console.log("location", location);

  try {
    const result = await postJobModel.find({});
    res.status(200).json(result);
    // console.log("get jobs: ",result);
  } catch (err) {
    res.status(500).json({
      msg: err,
    });
  }
};

module.exports = { getAllJobs };
