var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mentee = require('./mentee')

var MentorSchema = new Schema ({
	name: {
		type: String,
		required: [true, 'This user needs a name']
	},
	email: {
		type: String,
		required: [true, 'This user needs an email']
	},
	age: {
		type: Number
	},
	interests: [String],
	field: String,
	mentee: Mentee.Schema,
});

var Mentor = mongoose.model('Mentor', MentorSchema);

module.exports = Mentor;
module.exports.Schema = MentorSchema;