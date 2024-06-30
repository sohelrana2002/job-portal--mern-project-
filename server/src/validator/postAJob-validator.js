const { z } = require("zod");

// ====creating an object  schema========
const postAJobValidatorSchema = z.object({
    companyName: z
    .string({ required_error: "Company Name must be required" })
    .trim()
    .toLowerCase(),
    jobTitle: z
    .string({ required_error: "Job Title must be required" })
    .trim()
    .toLowerCase(),
    companyLogo: z
    .string({ required_error: "Company Logo must be required" })
    .trim()
    .toLowerCase(),
    minPrice: z
    .string({ required_error: "Min Price must be required" })
    .trim(),
    maxPrice: z
    .string({ required_error: "Mix Price must be required" })
    .trim(),
    salaryType: z
    .string({ required_error: "Salary Type must be required" })
    .trim()
    .toLowerCase(),
    jobLocation: z
    .string({ required_error: "Job Location must be required" })
    .trim()
    .toLowerCase(),
    postingDate: z
    .string({ required_error: "Posting Date must be required" })
    .trim(),
    experienceLevel: z
    .string({ required_error: "Experience Level must be required" })
    .trim()
    .toLowerCase(),
    employmentType: z
    .string({ required_error: "Employment Type must be required" })
    .trim()
    .toLowerCase(),
    description: z
    .string({ required_error: "Description must be required" })
    .trim()
    .toLowerCase(),
    email: z
    .string({ required_error: "Email must be required" })
    .trim()
    .toLowerCase()
    .email({ message: "Invalid Email" }),
    skills: z
    .string({ required_error: "Skills be required" })
    .trim()
    .toLowerCase(),
    shortDes: z
    .string({ required_error: "Short Description must be required" })
    .trim()
    .toLowerCase(),
});

module.exports = postAJobValidatorSchema;
