function generate() {
	intro = [
		'Understand why',
		'Read the reasons why',
		'Why',
		'A School In Ontario',
		'A transexual',
		'The Bangladeshis',
		'A british man',
		'A catholic priest',
	];	

	actions = [
		'wants to burn',
		'wants to buy',
		'wants to ban',
		'was sued for',
		'was banned from',
		'wants to make a movie for'
	];

	objects = [
		'a inflatable doll',
		'a KKK member',
		'Lady Gaga\'s dress',
		'a collection of old movies',
		'a meth pipe',
		'a Jesus shape dildo'
	];

	people = [
		'James Franco',
		'Paris Hilton',
		'Sarah Palin',
		'Phil Collins',
		'Jack Black',
		'Kanye West',
		'Macklemore',
		'Mark Zuckerberg',
		'Skrillex'
	];


	places = [
		'Wal Mart',
		'Apple Store',
		'Cinema',
		'a market on Sarajevo'
	];

	causes = [
		'poop in Michelle Obama\'s purse',
		'sell meth in front of a catholic school',
		'sell plutonium on ebay',
		'insult an holocaust survivor'
	];

	i = getRandomInt(0,intro.length-1);
	j = getRandomInt(0,objects.length-1);
	k = getRandomInt(0,actions.length-1);
	l = getRandomInt(0,people.length-1);
	m = getRandomInt(0,places.length-1);
	n = getRandomInt(0,causes.length-1);


	random = intro[i];

	if (i < 3) {
		t = getRandomInt(3,intro.length-1);
		random = random + ' ' + intro[t] + ' ' +  actions[k];		

		if (k == 3) {
			random = random + ' ' + causes[n];
		} else if (k < 3) {
			random = random + ' ' + people[l];
		} else {
			random = random + ' ' + places[m];
		}
	} else {
		random = random + ' ' +  actions[k];

		if (k < 3) {
			random = random + ' ' + objects[j] + ' for ' + causes[n];
		} else if (k == 3) {
			random = random + ' ' + people[n] + ' for ' +  causes[n];
		} else {
			random = random + ' ' + places[m] + ' for ' + causes[n];
		}
	}


	$('#randomTitle').html(random);
}	


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}