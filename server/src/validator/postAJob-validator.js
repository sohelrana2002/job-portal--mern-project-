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
});

module.exports = postAJobValidatorSchema;
