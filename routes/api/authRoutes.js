const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models")
const userController = require("../../controllers/userController")

//Sign up route =======
// router.post("/signup", function (req, res) {
//     db.User.create(req.body).then(dbUser => {
//         res.json(dbUser);
//     }).catch(err => console.log(err));
// })

//Sign up with controller====================
router.route("/signup").post(userController.create);

//login route w/ user Authentication
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
})

//logout route w/ user Authentication
router.get("/logout", (req, res) => {
    req.logout();
    res.sendStatus(200);
})


module.exports = router