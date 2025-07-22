const express = require("express")
const router = express.Router()
// const { home , register, login } = require("../controllers/auth-controller")
const authcontrollers = require("../controllers/auth-controller") //for easy
const { signUpSchema } = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")



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
router.route("/").get(authcontrollers.home)

//before registration validate(signUpSchema) check validity means check required field.
router
    .route("/register")
    .post(validate(signUpSchema) , authcontrollers.register);

router.route("/login").post(authcontrollers.login)



module.exports = router;



