var movies = [
	{
		name: "In bruges",
		rate: 5,
		watched: true,
	},

	{
		name: "Frozen",
		rate: 4.5,
		watched: false,
	},

	{
		name: "Mad Max Fury Road",
		rate: 5,
		watched: true,
	},

	{
		name: "Les Miserables",
		rate: 3.5,
		watched: false,
	},
];

// Solution 1:
/*
movies.forEach(function(movie) {
	var log = "";

	if (movie.watched) {
		log += "You have seen ";
	} else {
		log += "You have not seen "
	}

	log += "\"" +  movie.name +  "\" - " + movie.rate + " starts";
	console.log(log);
});
*/

// Solution 2:
function buildString(movie) {
	var log = "";

	if (movie.watched) {
		log += "You have seen ";
	} else {
		log += "You have not seen "
	}

	log += "\"" +  movie.name +  "\" - " + movie.rate + " starts";
	return log;
}

movies.forEach(function(movie) {
	console.log(buildString(movie));
});




