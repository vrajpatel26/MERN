const { z } = require("zod")

//create object schema
const signUpSchema = z.object({
    username: z
        .string({require_error : "Name is required"})
        .trim()
        .min(3,{message:"Name must be atleast of 3 character"})
        .max(100,{message:"Name must not be more than 100 character"}),
    
    email: z
        .string({require_error : "Email is required"})
        .trim()
        .email({message:"Invalid email address"})
        .min(3,{message:"Email must be atleast of 3 character"})
        .max(100,{message:"Email must not be more than 100 character"}),

    phone: z
        .string({require_error : "Phone is required"})
        .trim()
        .min(10,{message:"Phone must be atleast of 10 character"})
        .max(20,{message:"Phone must not be more than 100 character"}),

    password: z
        .string({require_error : "Password is required"})
        .trim()
        .min(7,{message:"Password must be atleast of 7 character"})
        .max(100,{message:"Password must not be more than 100 character"}),
})


module.exports = { signUpSchema };