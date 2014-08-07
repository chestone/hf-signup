var express = require('express');
var router = express.Router();

var Team = require('../data/models/team').Team;
var Player = require('../data/models/player').Player;

router.get('/', function(req, res) {
    Player.find({}, function(err, players) {
        res.send(players);
    });
});

router.get('/create/', function(req, res) {
   Team.find().lean().exec(function(err, teams) {
    res.locals = {
      team: teams
    };
    res.render('index', {
      partials: {
        part: 'partials/createPlayer'
      }
    });
   });
});

router.post('/create/', function(req, res) {
    console.log(JSON.stringify(req.params));
    var name = req.body.playerName;
    var role = req.body.playerRole;
    var teamName = req.body.teamName;
    var playerNum = req.body.playerNumber;

    Team.findOne({'name' : teamName}, function(err, team) {

      if (team.players.length >= 10) {
        res.send('Too Many Players on that Team');
      }
      var player = new Player({
        'name' : name,
        'role' : role,
        'teamName' : team,
        'phoneNumber' : playerNum
      });
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

