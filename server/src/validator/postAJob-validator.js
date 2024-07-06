const { z } = require("zod");

// ====creating an object  schema========
const postAJobValidatorSchema = z.object({
    companyName: z
    .string()
    .min(1, {message: "Company Name must be required"})
    .trim()
    .toLowerCase(),
    jobTitle: z
    .string()
    .min(1, {message: "Job Title must be required"})
    .trim()
    .toLowerCase(),
    companyLogo: z
    .string()
    .min(1, {message: "Company Logo must be required"})
    .trim()
    .toLowerCase(),
    minPrice: z
    .string()
    .min(1, {message: "Min Price must be required"})
    .trim(),
    maxPrice: z
    .string()
    .min(1, {message: "Mix Price must be required"})
    .trim(),
    salaryType: z
    .string()
    .min(1, {message: "Salary Type must be required"})
    .trim()
    .toLowerCase(),
    jobLocation: z
    .string()
    .min(1, {message: "Job Location must be required"})
    .trim()
    .toLowerCase(),
    postingDate: z
    .string()
    .min(1, {message: "Posting Date must be required"})
    .trim(),
    experienceLevel: z
    .string()
    .min(1, {message: "Experience Level must be required"})
    .trim()
    .toLowerCase(),
    employmentType: z
    .string()
    .min(1, {message: "Employment Type must be required"})
    .trim()
    .toLowerCase(),
    description: z
    .string()
    .min(1, {message: "Description must be required"})
    .trim()
    .toLowerCase(),
    email: z
    .string({ required_error: "Email must be required" })
    .trim()
    .toLowerCase()
    .email({ message: "Invalid Email" }),
    skills: z
    .string()
    .array(),
    shortDes: z
    .string()
    .min(1, {message: "Short Description must be required"})
    .trim()
    .toLowerCase(),
});

module.exports = postAJobValidatorSchema;
