const mongoose = require("mongoose");

const postJobSchema = new mongoose.Schema({
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
        // required: true,
        lowercase: true
    },
    minPrice: {
        type: String,
        // required: true,
        lowercase: true
    },
    maxPrice: {
        type: String,
        // required: true,
        lowercase: true
    },
    salaryType: {
        type: String,
        // required: true,
        lowercase: true
    },
    jobLocation: {
        type: String,
        // required: true,
        lowercase: true
    },
    postingDate: {
        type: String,
        // required: true,
        lowercase: true
    },
    experienceLevel: {
        type: String,
        // required: true,
        lowercase: true
    },
    employmentType: {
        type: String,
        // required: true,
        lowercase: true
    },
    description: {
        type: String,
        // required: true,
        lowercase: true
    },
    email: {
        type: String,
        // required: true,
        lowercase: true
    },
    skills: {
        type: String,
        // required: true,
        lowercase: true
    }
},{ timestamps: true })

const postJobModel = new mongoose.model("postJob", postJobSchema);

module.exports = postJobModel;