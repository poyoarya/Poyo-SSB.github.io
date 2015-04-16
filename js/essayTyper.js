String.prototype.capitalizeFirstLetter = function() { //easy stringcaps
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.countWords = function() { //easy counter
	return this.split(/\s+/).length;
}


var textArray = 	[ //define gibberish
					"ayy",
					"lmao",
					"yee",
					"chady",
					"skeltal",
					"noot",
					"bruh",
					"dude"
				];

$("#center").append("");

function start() {
	var paragraphs = document.getElementById("paragraphs").valueAsNumber;
	var words = document.getElementById("words").valueAsNumber;
	var variance = document.getElementById("variance").valueAsNumber;
	
	for (i = 0; i < words; i++) {
		//aaa
	}
}