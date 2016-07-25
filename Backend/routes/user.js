var Express = require('express');
var Router = Express.Router();
var Db = require('../database/db.js');

//Get all users
Router.get('/',
    function (req, res) {
        Db.User.findAll().then(function (users) {
            res.send(JSON.stringify(users));
        });
    });

//Post a new user
Router.post('/',
    function (req, res) {
        var newUser = {
            name: req.body.name,
            password: req.body.password
        }
        Db.User.create(newUser)
            .then(function (user) {
                res.send(JSON.stringify(user));
            }).catch(function (err) {
                res.status(500).send(JSON.stringify(err));
            });
    });
//Get a user by id
Router.get('/:UserID',
    function (req, res) {

        Db.User.findOne({ where: { id: req.params.UserID } })
            .then(function (user) {
                res.send(JSON.stringify(user));
            });

    });
//Delete a user by id
Router.delete('/:UserID',
    function(req, res) {
        Db.User.findOne({ where: { id: req.params.UserID } })
            .then(function(user) {
                user.destroy()
                    .then(function(x) {
                        res.send(JSON.stringify(x));
                    });
            });
    });

//Get savegames of a user
Router.get('/:UserID/state',
    function(req, res) {

        Db.GameState.findAll({ where: { userID: req.params.UserID } })
            .then(function(saves) {
                res.send(JSON.stringify(saves));
            });

    });

module.exports = Router;