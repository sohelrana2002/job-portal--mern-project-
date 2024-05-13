const { z } = require("zod");

// ====creating an object  schema========
const signUpValidatorSchema = z.object({
  email: z
    .string({ required_error: "Email must be required" })
    .trim()
    .email({ message: "Invalid email " }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 character" })
    .max(1024, { message: "Password can't be greater than 1024 character" }),
});

module.exports = signUpValidatorSchema;
