const express = require("express");
const router = new express.Router();
const postjobController = require('../controllers/postJob-controller');
const postAJobValidatorSchema = require("../validator/postAJob-validator");
const validate = require("../middlewares/validate-middleware");



router
.route("/post-job")
.post(validate(postAJobValidatorSchema), postjobController.postAJob);

module.exports = router;