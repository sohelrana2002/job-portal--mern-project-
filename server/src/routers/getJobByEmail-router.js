const express = require("express");
const router = new express.Router();

const getJobByEmailController = require("../controllers/getJobsByEmail-controller");

router.route("/jobs-by-email/:email").get(getJobByEmailController.getJobByEmail);

module.exports = router;