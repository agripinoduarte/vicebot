function generate() {
	people = [
		'Tom Hiddleston',
		'Lady Gaga',
		'Morgan Freeman',
		'Tilda Swinton',
		'James Franco',
		'Kanye West'
	];

	intro = [
		'Meet the',
		'You\'ll not gonna believe',
		'Here why this',
		'Read the reasons',
		'Understand why',
		'Meet the',
	];

	introPlaces = [
		'We\'d go to',
		'We send',
		'We have dinner',
		'We\'d smoke weed',
	];

	objects = [
		'folk band that',
		'people who',
		'family that',
		'group that',
		'rock band that',
		'a school teacher'
	];

	actions = [
		'tried to kill',
		'sued',
		'smoke weed with',
		'have sex with',
		'play sax with',
		'teach piano to'
	];	

	final = [
		'don\'t want to go back to Bosnia',
		'want a memorial in its honor.',
		'will run for the next elections',
		'want to open a meat restaurant in India',
		'wants to ressurects his dead dog'
	];

	i = getRandomInt(0,4);
	j = getRandomInt(0,4);
	k = getRandomInt(0,4);
	l = getRandomInt(0,4);
	m = getRandomInt(0,4);


	console.log(i);

	random = intro[i] + ' ' + objects[j] + ' ' + actions[k] + ' ' + people[l];

	if (i == 4 || i == 2) {
		random = random + ' ' + final[m];
	}

	$('#randomTitle').html(random);
}	


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}