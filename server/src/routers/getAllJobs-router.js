const express = require("express");
const router = new express.Router();
const getAllJobController = require('../controllers/getAllJobs-controller')
// console.log(postjobController);

router.route("/all-jobs").get(getAllJobController.getAllJobs);

module.exports = router;