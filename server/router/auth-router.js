const express = require("express")
const router = express.Router()
const { home , register, login } = require("../controllers/auth-controller")



// router.get("/", (req, res) => {
//     res.status(200).send("Hello I am server from router");
// })

// router.route("/").get((req, res) => {
//     res.status(200).send("Hello I am server from router");
// })

// router.route("/register").get((req, res) => {
//     res.status(200).send("Hello I am registeration page");
// })


//using controller
router.route("/").get(home)

router.route("/register").post(register)

router.route("/login").post(login)



module.exports = router;



