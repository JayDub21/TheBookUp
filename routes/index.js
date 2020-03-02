const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./api/authRoutes");

// API Routes
router.use("/api", apiRoutes);

//==================================
//New auth routes
//=================================
router.use("/api/auth/", authRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
