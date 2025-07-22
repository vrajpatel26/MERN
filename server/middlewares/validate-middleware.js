// const { Schema } = require("zod");

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody;
        next();
    } catch (error) {
        // Extracting specific error messages from ZodError
        const errorMessages = error.issues[0].message;
        console.log(errorMessages);
        
        res.status(400).json({ errors: errorMessages });
    }
};

module.exports = validate;