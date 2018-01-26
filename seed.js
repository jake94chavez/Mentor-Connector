var db = require('./models');

var menteeList = [
	{
		name: 'Sam Edwards',
		email: 'sam.edwards@imastudent.com',
		age: 16,
		interests: ['Reading', 'Gaming', 'Athletics'],
		desiredField: 'I don\'t know' 
	},
	{
		name: 'Silas Rodgers',
		email: 'silas.rodgers@imastudent.com',
		age: 17,
		interests: ['Photography', 'Film', 'Electronics'],
		desiredField: 'Film' 
	},
	{
		name: 'Taylor Craighead',
		email: 'taylor.craighead@imastudent.com',
		age: 16,
		interests: ['Gaming', 'Electronics'],
		desiredField: 'Video Games' 
	},
	{
		name: 'Garrett Krischke',
		email: 'garrett.krischke@imastudent.com',
		age: 15,
		interests: ['Gaming', 'Creative Writing', 'Acting', 'Reading'],
		desiredField: 'I don\'t know' 
	},
	{
		name: 'Reid Sullivan',
		email: 'reid.sullivan@imastudent.com',
		age: 16,
		interests: ['Art', 'Electronics'],
		desiredField: 'I don\'t know' 
	},
	{
		name: 'Valerie Martinez',
		email: 'valerie.martinez@imastudent.com',
		age: 16,
		interests: ['Athletics', 'Business', 'Fashion'],
		desiredField: 'Fashion' 
	},
	{
		name: 'Lia West',
		email: 'lia.west@imastudent.com',
		age: 14,
		interests: ['Acting', 'Music'],
		desiredField: '' 
	},
	{
		name: 'Samantha Dunnigan',
		email: 'samantha.dunnigan@imastudent.com',
		age: 17,
		interests: ['Art', 'Health/Fitness', 'Cooking'],
		desiredField: '' 
	}
];

var mentorList = [
	{
		name: 'Daria Culton',
		email: 'daria.culton@nonprofit.org',
		age: 35,
		interests: ['Reading', 'Outdoors'],
		field: 'Tech',
	},
	{
		name: 'David Hanson',
		email: 'david.hanson@mediamixers.com',
		age: 42,
		interests: ['Photography', 'Film', 'Collecting'],
		field: 'Film',
	},
	{
		name: 'Daniel Brown',
		email: 'daniel.brown@browninc.com',
		age: 33,
		interests: ['Athletics', 'Business', 'Fashion'],
		field: 'Fashion',
	},
	{
		name: 'Angela Garcia',
		email: 'angela.garcia@pressstartgames.com',
		age: 46,
		interests: ['Reading', 'Gaming', 'Creative Writing'],
		field: 'Video Games',
	},
	{
		name: 'Heather Crosby',
		email: 'heather.crosby@tripsolutions.com',
		age: 36,
		interests: ['Travel', 'Cooking', 'Health/Fitness'],
		field: 'Travel',
	},
	{
		name: 'John Applegate',
		email: 'john.applegate@freshyfilms.com',
		age: 28,
		interests: ['Music', 'Film', 'Acting'],
		field: 'Music',
	},
	{
		name: 'Terry Hawthorne',
		email: 'terry.hawthorne@graphicgals.com',
		age: 30,
		interests: ['Art', 'Electronics', 'Photography'],
		field: 'Graphic Design',
	},
	{
		name: 'Katie Grady',
		email: 'katie.grady@pressstartgames.com',
		age: 30,
		interests: ['Gaming', 'Electronics', 'Collecting'],
		field: 'Video Games',
	}
];
// db.Mentee.remove({}, function(err, mentees){
// 	if(err) {
// 		console.log('Error occured in remove', err);
// 	} else {
// 		console.log('removed all mentees');

// 		db.Mentee.create(menteeList, function(err, mentees){
// 			if(err) { return console.log('ERROR', err); }
// 			console.log('all mentees:', mentees);
// 			console.log('created', mentees.length, 'mentees');
// 			process.exit();
// 		});
// 	}
// });

db.Mentor.remove({}, function(err, mentors){
	if(err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('removed all mentors');

		db.Mentor.create(mentorList, function(err, mentors){
			if(err) { return console.log('ERROR', err); }
			console.log('all mentors:', mentors);
			console.log('created', mentors.length, 'mentors');
			process.exit();
		});
	}
});