var express = require('express');
var router = express.Router();

var Team = require('../data/models/team').Team;
var TimeSlot = require('../data/models/timeSlot').TimeSlot;

router.get('/', function(req, res) {
    Team.find({}, function(err, teams) {
        res.send(teams);
    });
});

router.post('/create/', function(req, res) {
  var name = req.body.teamName;
  var begin = req.body.teamTime.split(' - ')[0];
  var end = req.body.teamTime.split(' - ')[1];

  var newTeam = new Team({'name': name});

  TimeSlot.findOne({'begin': begin}, function(err, slot) {
    if (slot.teams.length >= 2) {
      res.send('Error: Too Many Teams at that Time Slot');
      return;
    }
    newTeam.save(function(err) {
      slot.teams.push(name);
      slot.save(function(err) {
        if (err) return handleError(err);
        res.send({'team': newTeam, 'slot': slot});
        return;
      });
    });
  });
});

router.get('/create/', function(req, res) {
  TimeSlot.find().lean().exec(function(err, slots) {
    res.locals = {
      timeSlots: slots
    };
    res.render('index', {
      partials: {
        part: 'partials/createTeam'
      }
    });
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
