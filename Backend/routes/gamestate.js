var Express = require('express');
var Router = Express.Router();
var Db = require('../database/db.js');

//Get all gamestates
Router.get('/',
    function (req, res) {
        Db.GameState.findAll()
            .then(function (gamestates) {
                res.send(JSON.stringify(gamestates));
            });
    });
//Get a gamestate by id
Router.get('/:SaveID',
    function (req, res) {

        Db.GameState.findAll({ where: { id: req.params.SaveID } })
            .then(function (gamestate) {
                res.send(JSON.stringify(gamestate));
            });

    });
//Delete a gamestate by id
Router.delete('/:SaveID',
    function (req, res) {
        Db.GameState.findOne({ where: { id: req.params.SaveID } })
            .then(function (state) {
                state.destroy()
                    .then(function (x) {
                        res.send(JSON.stringify(x));
                    });
            });
    });
//Post a new gamestate
Router.post('/:UserID',
    function (req, res) {
        var newGameState = {
            userID: req.params.UserID,
            score: req.body.score ? req.body.score : -1,
            isRunning: req.body.isRunning ? req.body.isRunning : -1,
            locationName: req.body.locationName ? req.body.locationName : "none",
            positionX: req.body.positionX ? req.body.positionX : -1,
            positionY: req.body.positionY ? req.body.positionY : -1,
            speedX: req.body.speedX ? req.body.speedX : -1,
            speedY: req.body.speedY ? req.body.speedY : -1
        }
        Db.GameState.create(newGameState)
            .then(function (gamestate) {
                res.send(JSON.stringify(gamestate));
            }).catch(function(err) {
                res.status(500).send(JSON.stringify(err));
            });
    });



module.exports = Router;