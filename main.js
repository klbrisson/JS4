//ORIGINAL CODE AND BONUS 1

// var numVictims = prompt('How many disaster victims are there?');
var moreInput = true;
var victims = [];
var victimPhones = [];
var victimStreets = [];
var volunteers = [];
var volunteerPhones = [];
var volunteerStreets = [];


while(moreInput) {
	victims.push(prompt('What is victim\'s name?'));
	victimPhones.push(prompt('What is victim\'s phone number?'));
	victimStreets.push(prompt('What is victim\'s street?'));
	moreInput = confirm('Press OK to add another victim. Press cancel to continue');
}
// var numVolunteers = prompt('How many volunteers are there?');
moreInput = true;
while(moreInput) {
	volunteers.push(prompt('What is volunteer\'s name?'));
	volunteerPhones.push(prompt('What is volunteer\'s phone number?'));
	volunteerStreets.push(prompt('What is volunteer\'s street?'));
	moreInput = confirm('Press OK to add another volunteer. Press cancel to continue');
}

alert('Number of persons in need: ' + victims.length +
	'\nNumber of volunteers: ' + volunteers.length +
	'\nPersons in need: ' + victims.join(', ') +
	'\nVolunteers: ' + volunteers.join(', '));






// Object.keys(student)
// Object.keys(student).length