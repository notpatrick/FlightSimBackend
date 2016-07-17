var Express = require('express');
var Router = Express.Router();
var DB = require('../database/db.js')


Router.get('/', function (req, res) {
    res.send("TestPage");
});

Router.get('/user/:UserID', function (req, res) {

    DB.User.findOne({ where: { id: req.params.UserID}}).then(function (user) {
        res.send(JSON.stringify(user));
    });

});

Router.get('/save/:SaveID', function (req, res) {

    DB.GameState.findOne({ where: { id: req.params.SaveID}}).then(function (gamestate) {
        res.send(JSON.stringify(gamestate));
    });

});

module.exports = Router;