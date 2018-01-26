var db = require('./models');

var menteeList = [
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	},
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '' 
	}
];

var mentorList = [
	{
		name: '',
		email: '',
		age:
		interests: [''],
		desiredField: '',
		mentee: 
	},
	{
		name:
		email:
		age:
		interests:
		desiredField:
		mentee: 
	}
	{
		name:
		email:
		age:
		interests:
		desiredField:
		mentee:
	}
	{
		name: 
		email: 
		age:
		interests:
		desiredField:
		mentee:
	},
	{
		name:
		email:
		age:
		interests:
		desiredField:
		mentee: 
	},
	{
		name:
		email:
		age:
		interests:
		desiredField:
		mentee:
	},
	{
		name: 
		email: 
		age:
		interests:
		desiredField:
		mentee:
	},
	{
		name:
		email:
		age:
		interests:
		desiredField:
		mentee: 
	},
	{
		name:
		email:
		age:
		interests:
		desiredField:
		mentee:
	},
	{
		name:
		email:
		age:
		interests:
		desiredField:
		mentee:
	}
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