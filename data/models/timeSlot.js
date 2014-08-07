var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeSlotSchema = new Schema({
    begin: { type: String, required: true },
    end: { type: String, required: true },
    teams: [String]
}, { collection: 'timeSlots' });

timeSlotSchema.statics.findAvailableTimeSlots = function (cb) {
  return this.model('TimeSlot').find({ $where: "this.teams.length < 2" }, cb);
};

var timeSlot = mongoose.model('TimeSlot', timeSlotSchema);
module.exports = { TimeSlot : timeSlot };

