/*	USING FUNCTIONS AND OBJECTS
	BONUS 2: DISPLAY VOLUNTEERS AVAILABLE ON SAME STREET */

var victims = {
	group: 'victim',
	names: [],
	phones: [],
	streets: [],
};
var volunteers = {
	group: 'volunteer',
	names: [],
	phones: [],
	streets: []
};

//USER INPUT FOR VICTIMS AND VOLUNTEERS

var addPersonsInfo = function(groupName) {
	var moreInput = true;
	while(moreInput) {
		groupName['names'].push(prompt('What is the ' + groupName.group + '\'s name?'));
		groupName['phones'].push(prompt('What is the ' + groupName.group + '\'s phone number?'));
		groupName['streets'].push(prompt('What is the ' + groupName.group + '\'s street?'));
		moreInput = confirm('Do you want to add another ' + groupName.group + '?');
	}
}
addPersonsInfo(victims);
addPersonsInfo(volunteers);

//ALERT LIST OF VICTIMS AND VOLUNTEERS
alert('Number of victims: ' + victims['names'].length +
	'\nNumber of volunteers: ' + volunteers['names'].length +
	'\nVictims\' names:\n' + victims['names'].join('\n') +
	'\nVolunteers\' names:\n' + volunteers['names'].join('\n'))

//SHOW VOLUNTEERS ON SAME STREET AS USER REQUESTED VICTIM
var personInNeed = prompt('Please enter the name of a person in need.');

var findVolunteers = function(victimsName) {
	var volunteersNearby = [];
	var victimsStreet = victims['streets'][victims['names'].indexOf(victimsName)];
	for (var i=0; i<volunteers['streets'].length; i++) {
		if (volunteers['streets'][i] === victimsStreet) {
			volunteersNearby.push(volunteers['names'][i]);
		}
	}
	return volunteersNearby;
}

alert('Volunteers near ' + personInNeed + ':\n' + findVolunteers(personInNeed).join('\n'));






