Array.prototype.contains = function(wordSet, location) { //function to see if a word is contained at a location in an array
	var input = [];
	for (i = 0; i < this.length; i++) {
		input[i] = this[i].toUpperCase();
	}
	var finalWordSet = wordSet.split("."); //wordSet is the library of words, to account for synonyms
	if (finalWordSet.length != 2) {
		throw "ADVENTUREError: wordSet must be two long";
		return;
	}
	for (i = 0; i < adventure.words[finalWordSet[0]][finalWordSet[1]].length; i++) {
		if (input[location] == (adventure.words[finalWordSet[0]][finalWordSet[1]][i])) {
			return true;
		}
	}
	return false;
}

Array.prototype.clean = function(deleteValue) { //remove empty values, so punctuation-only words will not errorify
	for (var i = 0; i < this.length; i++) {
		if (this[i] == deleteValue) {         
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

Array.prototype.randomElement = function() { //get random part of an array, for use with random word generation
    return this[Math.floor(Math.random() * this.length)]
}

var focus = setInterval(function() { //make sure text input is focused at all times
	if ($("#input").prop("disabled") == false) {
		$("#input").focus();
	}
}, 10);

var adventure = {
	colors: { //list of colors to use for text rendering
		black: "#000000",
		darkRed: "#800000",
		darkGreen: "#008000",
		darkYellow: "#808000",
		darkBlue: "#000080",
		darkMagenta: "#800080",
		darkCyan: "#008080",
		gray: "#C0C0C0",
		darkGray: "#808080",
		red: "#ff0000",
		green: "#00ff00",
		yellow: "#ffff00",
		blue: "#0000ff",
		magenta: "#ff00ff",
		cyan: "#00ffff",
		white: "#ffffff"
	},
	
	print: function(isNewLine, text, color) {
		if (typeof color == 'undefined') {
			color = "gray";
		}
		if (isNewLine) {
			$("#console").append(
				$("<p style=\"color: " + adventure.colors[color] + ";\"></p>").text(text)
			);
		} else {
			$("#console").children().last().append(
				$("<span style=\"color: " + adventure.colors[color] + ";\"></span>").text(text)
			);
		}
	},
	
	newLine: function() {
		$("#console").append($("</br>"));
	},
	
	disableInput: function() {
		$("#arrow").hide()
		$("#input").prop("disabled", true)
	},
	
	enableInput: function() {
		$("#arrow").show()
		$("#input").prop("disabled", false)
	},
	
	lastInput: "", //used for interpretation
	lastInputRaw: "", //used for up button
	grammarFlag: 1, //used for things like "at, with" etc.
}