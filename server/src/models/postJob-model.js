const mongoose = require("mongoose");

const postJobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      uppercase: true,
    },
    jobTitle: {
      type: String,
      lowercase: true,
    },
    companyLogo: {
      type: String,
      lowercase: true,
    },
    minPrice: {
      type: String,
      // required: true,
      lowercase: true,
    },
    maxPrice: {
      type: String,
      lowercase: true,
    },
    salaryType: {
      type: String,
      lowercase: true,
    },
    jobLocation: {
      type: String,
      lowercase: true,
    },
    postingDate: {
      type: String,
      lowercase: true,
    },
    experienceLevel: {
      type: String,
      lowercase: true,
    },
    employmentType: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    skills: {
      type: Array,
    },
    shortDes: {
      type: String,
      lowercase: true
    }
  },
  { timestamps: true }
);

const postJobModel = new mongoose.model("postJob", postJobSchema);

module.exports = postJobModel;
