const express = require("express");
const router = new express.Router();
const getAllJobController = require('../controllers/getAllJobs-controller')
// console.log(postjobController);

router.route("/all-jobs").get(getAllJobController.getAllJobs);
router.route("/all-jobs-Testing").get(getAllJobController.getAllJobsTesting);

module.exports = router;