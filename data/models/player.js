var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    playerid : { type: String, required: true, index: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    number: String
}, { collection: 'players' });

var player = mongoose.model('Player', playerSchema);
module.exports = { Player: player };
