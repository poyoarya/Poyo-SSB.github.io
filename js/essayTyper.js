String.prototype.capitalizeFirstLetter = function() { //easy stringcaps
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.countWords = function() { //easy counter
	return this.split(/\s+/).length;
};

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


var textArray = [ //define gibberish
					"ayy",
					"lmao",
					"yee",
					"bruh"
				];

function start() {
	var paragraphs = document.getElementById("paragraphs").valueAsNumber;
	var words = document.getElementById("words").valueAsNumber;
	var variance = document.getElementById("variance").valueAsNumber;
	
	if (words - variance < 1) {
		window.alert("The variance factor should not exceed the number of words!");
		return;
	}
	
	var index = 1;
	var isNewSentence = 1; 
	
	$("#center").empty();
	
	for (i = 0; i < paragraphs; i++) {
		
	}
}
