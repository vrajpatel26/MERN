const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

})


// it gives data(details of filling data) before save 
userSchema.pre("save", async function (next) {
    // console.log("pre method" , this);

    const user = this;

    //if pass not modified(created) then go to next
    if (!user.isModified("password")) {
        next();
    }

    //hash password
    try {
        // const saltRound = 10;
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound)
        user.password = hash_password;
    } catch (error) {
        next(error);
    }

})


//compare the password
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password)
}


//JSON web token
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
            {
                userId : this._id.toString(),
                email : this.email,
                isAdmin : this.isAdmin,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "30d"
            }
        )
    } catch (error) {
        console.error(error);
        
    }
}

//define model or collection name
const User = new mongoose.model("User", userSchema) //in db automatically convert users from User.

module.exports = User;