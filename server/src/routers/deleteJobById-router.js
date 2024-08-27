const express = require("express");
const router = new express.Router();
const deleteJobByIdController = require("../controllers/deleteJobById-controller");

router.route("/delete-job/:id").delete(deleteJobByIdController.deleteJobById);

module.exports = router;