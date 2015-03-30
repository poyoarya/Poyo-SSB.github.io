var id = 1

String.prototype.capitalizeFirstLetter = function() { //easy stringcaps
	return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.countWords = function() { //easy counter
	return this.split(/\s+/).length;
}

var yeeArray = 	[ //define gibberish
					"ayy",
					"lmao",
					"yee",
					"chady",
					"skeltal",
					"noot",
					"wat",
					"bruh"
				]

var caps = true;
var indent = true;

var num = Math.floor(Math.random() * (200 - 50 + 1)) + 25;

for (i = 0; i < num; i++) { //repeat over and over
	if (indent == true) {
		document.getElementById("essay" + id).innerHTML = document.getElementById("essay" + id).innerHTML + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	}
	if (caps == true) {
		document.getElementById("essay" + id).innerHTML = document.getElementById("essay" + id).innerHTML + " " + yeeArray[Math.floor(Math.random() * yeeArray.length)].capitalizeFirstLetter(); //adds word with caps
	} else {
		document.getElementById("essay" + id).innerHTML = document.getElementById("essay" + id).innerHTML + " " + yeeArray[Math.floor(Math.random() * yeeArray.length)]; //adds word
	}
	var caps = false;
	var indent = false;	
	var yeeRand = Math.random(); //generates random number for punctuation
	if (yeeRand > 0.85) {
		var yeeRand = Math.random(); //another random number for which type
		if (yeeRand > 0.35) {
			var yeeRand = Math.random(); //another random number for which end
			if (yeeRand > 0.05) {
				document.getElementById("essay" + id).innerHTML = document.getElementById("essay" + id).innerHTML + "."
			} else {
				document.getElementById("essay" + id).innerHTML = document.getElementById("essay" + id).innerHTML + "?"
			}
			var caps = true;
		} else {
			document.getElementById("essay" + id).innerHTML = document.getElementById("essay" + id).innerHTML + ","
		}
	}
	var yeeRand = Math.random(); //yet another random number for newline
	if ((yeeRand > 0.985) && (document.getElementById("essay" + id).innerHTML.countWords() > 25)) {
		id = id + 1;
		if (document.getElementById("essay" + (id - 1)).innerHTML.slice(-1) == ".") {
			document.getElementById("essay" + (id - 1)).innerHTML = document.getElementById("center").innerHTML + "<p id=\"essay" + id + "\"></p>"
		} else {
			document.getElementById("essay" + (id - 1)).innerHTML = document.getElementById("essay" + (id - 1)).innerHTML + ".</br>"
			document.getElementById("essay" + (id - 1)).innerHTML = document.getElementById("center").innerHTML + "<p id=\"essay" + id + "\"></p>"
		}
		var caps = true;
		var indent = true;
	}
}
if (document.getElementById("essay" + id).innerHTML.slice(-1) !== ".") {
	document.getElementById("essay" + id).innerHTML = document.getElementById("essay" + id).innerHTML + "."
}