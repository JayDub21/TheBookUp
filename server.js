//=================================================================
//Lets do it
//=================================================================
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//Models for sending email and password to database
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Playing with api routes outside of route folder

app.get("/api/hello", function (req, res){
    res.send("hello");
})

//Setting up sign up route
app.post("/api/signup", function (req, res){
    db.User.create(req.body). then(dbUser => {
        res.json(dbUser);
    })
    // res.json({...req.body, server: true});
})

// Add routes, both API and view 
app.use(routes);


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/thebookupDB")
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
