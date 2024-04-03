const express = require("express");
const router = new express.Router();
const postjobController = require('../controllers/postJob-controller')
console.log(postjobController);

router.route("/post-job").post(postjobController.postAJob);

module.exports = router;