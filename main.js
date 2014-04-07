// //ORIGINAL CODE AND BONUS 1

// // var numVictims = prompt('How many disaster victims are there?');
// var victims = [];
// var victimPhones = [];
// var victimStreets = [];
// var volunteers = [];
// var volunteerPhones = [];
// var volunteerStreets = [];


// while(moreInput) {
// 	victims.push(prompt('What is victim\'s name?'));
// 	victimPhones.push(prompt('What is victim\'s phone number?'));
// 	victimStreets.push(prompt('What is victim\'s street?'));
// 	moreInput = confirm('Press OK to add another victim. Press cancel to continue');
// }
// // var numVolunteers = prompt('How many volunteers are there?');
// moreInput = true;
// while(moreInput) {
// 	volunteers.push(prompt('What is volunteer\'s name?'));
// 	volunteerPhones.push(prompt('What is volunteer\'s phone number?'));
// 	volunteerStreets.push(prompt('What is volunteer\'s street?'));
// 	moreInput = confirm('Press OK to add another volunteer. Press cancel to continue');
// }

// alert('Number of persons in need: ' + victims.length +
// 	'\nNumber of volunteers: ' + volunteers.length +
// 	'\nPersons in need: ' + victims.join(', ') +
// 	'\nVolunteers: ' + volunteers.join(', '));



/*	USING OBJECTS INSTEAD OF ARRAYS
	BONUS 2: DISPLAY VOLUNTEERS AVAILABLE ON SAME STREET */

var victims = {
	names: [],
	phones: [],
	streets: [],
}
var volunteers = {
	names: [],
	phones: [],
	streets: []
}

//USER INPUT FOR VICTIMS AND VOLUNTEERS
var moreInput = true;
while(moreInput) {
	victims['names'].push(prompt('What is the victim\'s name?'));
	victims['phones'].push(prompt('What is the victim\'s phone number?'));
	victims['streets'].push(prompt('What is the victim\'s street?'));
	moreInput = confirm('Do you want to add another victim?');
}
moreInput = true;
while(moreInput) {
	volunteers['names'].push(prompt('What is the volunteer\'s name?'));
	volunteers['phones'].push(prompt('What is the volunteer\'s phone number?'));
	volunteers['streets'].push(prompt('What is the volunteer\'s street?'));
	moreInput = confirm('Do you want to add another volunteer?');
}

//ALERT LIST OF VICTIMS AND VOLUNTEERS
alert('Number of victims: ' + victims['names'].length +
	'\nNumber of volunteers: ' + volunteers['names'].length +
	'\nVictims\' names:\n' + victims['names'].join('\n') +
	'\nVolunteers\' names:\n' + volunteers['names'].join('\n'))

//SHOW VOLUNTEERS ON SAME STREET AS USER REQUESTED VICTIM
var victimsIndex = victims['names'].indexOf(prompt('Please enter the name of a person in need'));
var volunteersNearby = [];
for (var i=0; i<volunteers['streets'].length; i++) {
	if (volunteers['streets'][i] === victims['streets'][victimsIndex]) {
		volunteersNearby.push(volunteers['names'][i]);
	}
}
alert('Volunteers near ' + victims['names'][victimsIndex] + ':\n' + volunteersNearby.join('\n'));






