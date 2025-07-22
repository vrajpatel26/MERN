// const { Schema } = require("zod");

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody;
        next();
    } catch (error) {
        //before use error middleware :-

        // Extracting specific error messages from ZodError
        // const errorMessages = error.issues[0].message;
        // console.log(errorMessages);
        
        // res.status(400).json({ errors: errorMessages });

        //After use error middleware
        const status = 422;
        const message = "Fill Details Properly"
        const extraDetails = error.issues[0].message;

        const err = {
            status,
            message,
            extraDetails
        }
        console.log(err);
        next(err);
        
    }
};

module.exports = validate;