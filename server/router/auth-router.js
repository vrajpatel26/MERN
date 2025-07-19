const express = require("express")
const router = express.Router()

// router.get("/", (req, res) => {
//     res.status(200).send("Hello I am server from router");
// })

router.route("/").get((req, res) => {
    res.status(200).send("Hello I am server from router");
})

router.route("/register").get((req, res) => {
    res.status(200).send("Hello I am register page");
})
module.exports = router;