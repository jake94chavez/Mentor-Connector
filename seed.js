var db = require('./models');

var menteeList = [
	{
		name: 'Sam Edwards',
		email: 'sam.edwards@imastudent.com',
		age: 16,
		interests: ['Books', 'Gaming'],
		desiredField: 'I don\'t know' 
	},
	{
		name: 'Silas Rodgers',
		email: 'silas.rodgers@imastudent.com',
		age: 17,
		interests: ['Photography', 'Film', 'Electronics'],
		desiredField: '' 
	},
	{
		name: 'Taylor Craighead',
		email: 'taylor.craighead@imastudent.com',
		age: 16,
		interests: ['Gaming', 'Electronics'],
		desiredField: '' 
	},
	{
		name: 'Garrett Krischke',
		email: 'garrett.krischke@imastudent.com',
		age: 15,
		interests: ['Gaming', 'Creative Writing', 'Acting', 'Books'],
		desiredField: '' 
	},
	{
		name: 'Reid Sullivan',
		email: 'reid.sullivan@imastudent.com',
		age: 16
		interests: ['Art', 'Drawing', 'Sculpture'],
		desiredField: '' 
	},
	{
		name: 'Valerie Martinez',
		email: 'valerie.martinez@imastudent.com',
		age: 16
		interests: ['Athletics', 'Business'],
		desiredField: '' 
	},
	{
		name: 'Lia West',
		email: 'lia.west@imastudent.com',
		age: 14,
		interests: ['Choir', 'Acting'],
		desiredField: '' 
	},
	{
		name: 'Samantha Dunnigan',
		email: 'samantha.dunnigan@imastudent.com',
		age: 17
		interests: ['Metalworking', 'Art', 'Sculpture'],
		desiredField: '' 
	},
];

var mentorList = [
	{
		name: 'Daria Culton',
		email: 'daria.culton@nonprofit.org',
		age: 35,
		interests: ['Reading', 'Outdoors'],
		field: 'Tech',
		mentee: 
	},
	{
		name:
		email:
		age:
		interests:
		field:
		mentee: 
	}
	{
		name:
		email:
		age:
		interests:
		field:
		mentee:
	}
	{
		name: 
		email: 
		age:
		interests:
		field:
		mentee:
	},
	{
		name:
		email:
		age:
		interests:
		field:
		mentee: 
	},
	{
		name:
		email:
		age:
		interests:
		field:
		mentee:
	},
	{
		name: 
		email: 
		age:
		interests:
		field:
		mentee:
	},
	{
		name:
		email:
		age:
		interests:
		field:
		mentee: 
	},
];
db.Mentee.remove({}, function(err, mentees){
	if(err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('removed all mentees');

		db.Mentee.create(menteeList, function(err, mentees){
			if(err) { return console.log('ERROR', err); }
			console.log('all mentees:', mentees);
			console.log('created', mentees.length, 'mentees');
			process.exit();
		});
	}
});

db.Mentor.remove({}, function(err, mentors){
	if(err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('removed all mentors');mentor

		db.Mentor.create(mentorList, function(err, mentors){
			if(err) { return console.log('ERROR', err); }
			console.log('all mentors:', mentors);
			console.log('created', mentors.length, 'mentors');
			process.exit();
		});
	}
});