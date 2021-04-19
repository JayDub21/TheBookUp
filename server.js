//=================================================================
//Lets do it
//=================================================================
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const routes = require('./routes');

// const connectStore = require("connect-mongo");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sessions
app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
//Using passport to check user authentication
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/hello', function (req, res) {
  res.send('SUCCESS ===================Server is talking to the frontend');
});

// Add routes, both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/thebookupDB')
  .then(() => console.log('Database is connected'))
  .catch((err) => console.log(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
