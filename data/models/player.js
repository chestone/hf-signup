var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    name: { type: String, required: true, index: true },
    teamName: { type: String, required: true, index: true },
    phoneNumber: String
}, { collection: 'players' });

var player = mongoose.model('Player', playerSchema);
module.exports = { Player: player };
