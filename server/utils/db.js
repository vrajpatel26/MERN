const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI)

const URI = process.env.MONGODB_URI

const connectDb = async() =>{
try {
    await mongoose.connect(URI)
    console.log("database connection successfully");
    
} catch (error) {
    console.error("database connection failed")
    process.exit(0); //exit 
} 
}

module.exports = connectDb;