var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    name: { type: String, required: true, index: true },
    players: [ String ]
}, { collection: 'teams' });

var team = mongoose.model('Team', teamSchema);
module.exports = { Team: team };

