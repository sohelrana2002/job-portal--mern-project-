const express = require("express");
const router = new express.Router();
const getJobByIdController = require('../controllers/getJobById-controller')
// console.log(postjobController);

router.route("/all-jobs/:id").get(getJobByIdController.getJobById);

module.exports = router;