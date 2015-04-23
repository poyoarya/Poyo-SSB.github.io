String.prototype.capitalizeFirstLetter = function() { //easy stringcaps
	return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.countWords = function() { //easy counter
	return this.split(/\s+/).length;
};

function randomIntFromInterval(min, max) { //gets number between given bounds
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Array.prototype.getRandom = function() { //derives from randomIntFromInterval(), gets random value from an array 
	return this[Math.floor(Math.random() * ((this.length - 1) - 0 + 1) + 0)]
};

function isNumberKey(evt){ //prevents typing of non-numbers in the thingledingle 
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("It'll only work if you type a number!");
		return false;
	}
	return true;
}

var textArray = [ //define gibberish
					"a"
				//	"bruh",
				//	"ayy",
				//	"lmao"
				];

function start() { //bruh
	var paragraphs = document.getElementById("paragraphs").valueAsNumber;
	var words = document.getElementById("words").valueAsNumber;
	var variance = document.getElementById("variance").valueAsNumber;
	
	if (words - variance < 1) {
		window.alert("The variance factor should not exceed the number of words!");
		return;
	}
	
	var index = 1;
	
	$("#center").empty();
	
	for (i = 0; i < paragraphs; i++) {
		$("#center").append("<p class=\"p\" id=\"paragraph" + i + "\"></p>");
		
		var wordsPer = words + randomIntFromInterval(-variance, variance);
		var isNewSentence = true; 
		
		for (j = 0; j < wordsPer; j++) {
			if (isNewSentence) {
				$("#paragraph" + i).append(textArray.getRandom().capitalizeFirstLetter()) 
			} else {
				$("#paragraph" + i).append(textArray.getRandom()) 
			}
			
			if (j != (wordsPer + 1)) {
				var puncRand = Math.random();
				
				if (puncRand < 0.0625) {
					puncRand = Math.random();
					
					if (puncRand < 0.8) {
						puncRand = Math.random();
						
						if (puncRand > 0.02) {
							$("#paragraph" + i).append(". ");
						} else {
							puncRand = Math.random();
							
							if (puncRand > 0.85) {
								$("#paragraph" + i).append("? ");
							} else {
								$("#paragraph" + i).append("! ");
							}
						}
					} else {
						$("#paragraph" + i).append(", ");
					}
					isNewSentence = true;
					
				} else {
					$("#paragraph" + i).append(" ");
				}
			}
			
			isNewSentence = false;
		}
		
		puncRand = Math.random();
		
		if (puncRand > 0.02) {
			document.getElementById("paragraph" + i).innerHTML = $("#paragraph" + i).html().slice(0, -1) + ".";
			isNewSentence = true;
		} else {
			document.getElementById("paragraph" + i).innerHTML = $("#paragraph" + i).html().slice(0, -1) + "?";
			isNewSentence = true;
		}
	}
}
