var express = require('express');
var router = express.Router();

var Player = require('../data/models/player').Player;

router.get('/', function(req, res) {
    Player.find({}, function(err, players) {
        res.send(players);
    });
});

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.params));
    Player.create(req.params, function(err, players) {
        res.send(players);
    });
});

// router.delete('/:id', function(req, res) {
//     Player.find({}, function(err, teams) {
//         res.send(teams);
//     });
// });

router.get('/:id', function(req, res) {
    Player.find({ player_id: req.params.id.toString() }, function(err, player) {
        res.send(player);
    });
});

router.get('/:id/players', function(req, res) {
    Player.find({ player_id: req.params.id.toString() }, 'players',  function(err, player) {
        res.send(player);
    });
});

module.exports = router;

