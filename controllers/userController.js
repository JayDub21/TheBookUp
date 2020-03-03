const db = require("../models");

//Defining methods for the userController

module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            // .then(function () { res.redirect(307, "localhost:3000/post"); })
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};