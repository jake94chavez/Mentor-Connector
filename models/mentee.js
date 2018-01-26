var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenteeSchema = new Schema ({
	name: {
		type: String,
		required: [true, 'This user needs a Name']
	},
	email: {
		type: String,
		required: [true, 'This user needs an email']
	},
	age: Number,
	interests: [String],
	desiredField: String,
	mentor: Mentor.Schema
});

var Mentee = mongoose.model('Mentee', MenteeSchema)
module.exports = Mentee;
module.exports.Schema = MenteeSchema;