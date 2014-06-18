var express = require('express');
var router = express.Router();

var Team = require('../data/models/team').Team;

router.get('/', function(req, res) {
    Team.find({}, function(err, teams) {
        res.send(teams);
    });
});

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.params));
    Team.create(req.params, function(err, teams) {
        res.send(teams);
    });
});

// router.delete('/:id', function(req, res) {
//     Team.find({}, function(err, teams) {
//         res.send(teams);
//     });
// });

router.get('/:id', function(req, res) {
    Team.find({ team_id: req.params.id.toString() }, function(err, team) {
        res.send(team);
    });
});

router.get('/:id/players', function(req, res) {
    Team.find({ team_id: req.params.id.toString() }, 'players',  function(err, team) {
        res.send(team);
    });
});

module.exports = router;
