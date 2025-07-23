require("dotenv").config() //always in top for get env data
const express = require("express")
const app = express()
const authRouter = require("./router/auth-router")
const contactRouter = require("./router/contact-router")
const connectDb = require("./utils/db")
const errorMiddleware = require("./middlewares/error-middleware")

//middlewear
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);


// app.get("/", (req,res)=>{
//     res.status(200).send("Hello I am server");
// })

// app.get("/about", (req,res)=>{
//     res.status(200).send("Hello I am about page");ff
// })


app.use(errorMiddleware)

connectDb().then(() => {
    const PORT = 5000
    app.listen(PORT, () => {
        console.log(`server running on ${PORT} PORT`);
    })
})