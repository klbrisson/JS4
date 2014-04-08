/*	USING FUNCTIONS AND OBJECTS
	BONUS 2: DISPLAY VOLUNTEERS AVAILABLE ON SAME STREET */

var victim = {
	group: 'victim',
	name: [],
	phone: [],
	street: [],
};
var volunteer = {
	group: 'volunteer',
	name: [],
	phone: [],
	street: []
};

//USER INPUT FOR VICTIMS AND VOLUNTEERS
var addPersonsInfo = function(groupName) {
	var moreInput = true;
	while(moreInput) {
		for (key in groupName){
			if (groupName[key] instanceof Array) {
				groupName[key].push(prompt('What is the ' + groupName.group + '\'s ' + key + '?'));
			}
		}
		moreInput = confirm('Do you want to add another ' + groupName.group + '?');
	}
}

addPersonsInfo(victim);
addPersonsInfo(volunteer);

//ALERT LIST OF victim AND VOLUNTEERS
alert('Number of victim: ' + victim['name'].length +
	'\nNumber of volunteer: ' + volunteer['name'].length +
	'\nVictims\' names:\n' + victim['name'].join('\n') +
	'\nVolunteers\' names:\n' + volunteer['name'].join('\n'));

//SHOW VOLUNTEER ON SAME STREET AS USER REQUESTED VICTIM
var personInNeed = prompt('Please enter the name of a person in need.');
var findVolunteers = function(victimsName) {
	var volunteersNearby = [];
	var victimsStreet = victim['street'][victim['name'].indexOf(victimsName)];
	for (var i=0; i<volunteer['street'].length; i++) {
		if (volunteer['street'][i] === victimsStreet) {
			volunteersNearby.push(volunteer['name'][i]);
		}
	}
	return volunteersNearby;
}
alert('Volunteer near ' + personInNeed + ':\n' + findVolunteers(personInNeed).join('\n'));
