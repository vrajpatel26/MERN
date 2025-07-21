
const User = require("../models/user-model")
const bcrypt = require("bcryptjs")

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

        //schema
        const { username, email, phone, password } = req.body;

        //for check email exist or not //await is used when findone method
        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(400).json({ message: "email already exist" })
        }


        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound)

        //if does not exist then create
        const userCreated = await User.create({
            username,
            email,
            phone,
            password
            // password: hash_password,
        })



        // res.status(200).send("Hello I am registeration page using controller");
        res
            .status(200)
            .json({ 
                message: userCreated, 
                token: await userCreated.generateToken(),
                userId : userCreated._id.toString()
            });

    } catch (error) {
        console.log(error);
    }
}

module.exports = { home, register }