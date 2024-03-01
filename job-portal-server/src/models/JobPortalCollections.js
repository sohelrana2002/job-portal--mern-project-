const mongoose = require("mongoose");

const jobPortalSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        lowercase: true
    },
    jobTitle: {
        type: String,
        required: true,
        lowercase: true
    },
    companyLogo: {
        type: String,
        required: true,
        lowercase: true
    },
    minPrice: {
        type: String,
        required: true,
        lowercase: true
    },
    maxPrice: {
        type: String,
        required: true,
        lowercase: true
    },
    salaryType: {
        type: String,
        required: true,
        lowercase: true
    },
    jobLocation: {
        type: String,
        required: true,
        lowercase: true
    },
    postingDate: {
        type: String,
        required: true,
        lowercase: true
    },
    experienceLevel: {
        type: String,
        required: true,
        lowercase: true
    },
    employmentType: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
})

const JobPortalCollection = new mongoose.model("JobPortalCollection", jobPortalSchema);

module.exports = JobPortalCollection;