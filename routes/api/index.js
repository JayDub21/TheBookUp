const router = require("express").Router();
const userRoutes = require("./user");

//User routes
router.use("/signup", userRoutes);

module.exports = router;