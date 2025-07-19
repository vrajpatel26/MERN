const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.status(200).send("Hello I am server");
})

app.get("/about", (req,res)=>{
    res.status(200).send("Hello I am about page");ff
})

const PORT = 5000
app.listen(PORT,()=>{
    console.log(`server running on ${PORT} PORT`);
    
})