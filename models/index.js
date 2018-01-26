var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MentorConnector')

module.exports.Mentee = require('./mentee');
module.exports.Mentor = require('./mentor');