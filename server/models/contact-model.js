//here we use destructuring

const { Schema, model } = require("mongoose")

const contactSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }

})

//create model or collection
//First letter capital
const Contact = new model("Contact", contactSchema)

module.exports = Contact;