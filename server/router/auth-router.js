const express = require("express")
const router = express.Router()
const { home , register } = require("../controllers/auth-controller")



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


module.exports = router;



// MONGODB_URI = mongodb+srv://vraj26112004:vraj2611@database.brakj1l.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=database

// SECRET_KEY = vraj2611