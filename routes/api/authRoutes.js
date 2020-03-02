const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models")

//Sign up route =======
router.post("/signup", function (req, res) {
    db.User.create(req.body).then(dbUser => {
        res.json(dbUser);
    }).catch(err => console.log(err));
})
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