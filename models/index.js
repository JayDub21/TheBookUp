module.exports = {
    User: require("./user"),
    Listing: require("./listing")
};
// var mongoose = require(mongoose),
//     User = require('./user');

// var connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
// mongoose.connect(connStr, function(err) {
//     if (err) throw err;
//     console.log('Successfully connected to MongoDB');
// });

// // create a user a new user
// var testUser = new User({
//     username: 'jmar777',
//     password: 'Password123'
// });

// // create new user in database
// testUser.save(function(err) {
//     if (err) throw err;
// });

// // fetch user and test password verification
// User.findOne({ username: 'jmar777' }, function(err, user) {
//     if (err) throw err;

//     // test a matching password
//     user.comparePassword('Password123', function(err, isMatch) {
//         if (err) throw err;
//         console.log('Password123:', isMatch); // -&gt; Password123: true
//     });

//     // test a failing password
//     user.comparePassword('123Password', function(err, isMatch) {
//         if (err) throw err;
//         console.log('123Password:', isMatch); // -&gt; 123Password: false
//     });
// });