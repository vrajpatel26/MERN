const mongoose = require("mongoose")

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


//
userSchema.pre("save" , async function(params) {
    console.log("pre method" , this);
    
})

//define model or collection name

const User = new mongoose.model("User",userSchema) //in db automatically convert users from User.

module.exports = User;