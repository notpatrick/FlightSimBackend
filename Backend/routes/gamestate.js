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
//Post a new gamestate
Router.post('/',
    function (req, res) {
        var newGameState = {
            userID: req.body.userID,
            score: req.body.score,
            isRunning: req.body.isRunning,
            locationName: req.body.locationName,
            positionX: req.body.positionX,
            positionY: req.body.positionY,
            speedX: req.body.speedX,
            speedY: req.body.speedY
        }
        Db.GameState.create(newGameState)
            .then(function (gamestate) {
                res.send(JSON.stringify(gamestate));
            }).catch(function (err) {
                res.status(500).send(JSON.stringify(err));
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




module.exports = Router;