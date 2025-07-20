
const User = require("../models/user-model")

//Home page

const home = async (req, res) => {
    try {
        res.status(200).send("Hello I am Home page using controller");
    } catch (error) {
        console.log(error);

    }
}


//Registration page

const register = async (req, res) => {
    try {
        console.log(req.body);

        const { username, email, phone, password } = req.body;

        //for check email exist or not //await is used when findone method
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(400).json({ message: "email already exist" })
        }

        //if does not exist then create
        const userCreated = await User.create({ username, email, phone, password })



        // res.status(200).send("Hello I am registeration page using controller");
        res.status(200).json({ message: userCreated });

    } catch (error) {
        console.log(error);

    }
}

module.exports = { home, register }