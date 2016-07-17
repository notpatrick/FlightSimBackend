var Express = require('express');
var Router = Express.Router();
var DB = require('../database/db.js')


Router.get('/', function (req, res) {
    res.send("TestPage");
});

Router.get('/:UserID', function (req, res) {

    DB.GameState.findOne({ where: { userID: req.params.UserID}}).then(function (gamestate) {
        res.send(JSON.stringify(gamestate));
    });

});

module.exports = Router;