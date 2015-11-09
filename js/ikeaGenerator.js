String.prototype.lastLetter = function (offset) {
	if (!offset) {offset = 0; }
	return this.substring(this.length - 1 - offset, this.length - offset).toUpperCase();
};

String.prototype.isVowel = function () {
	return ["A", "E", "I", "O", "U", "\u00C5", "\u00C4", "\u00D6"].indexOf(this.toUpperCase()) !== -1;
};

String.prototype.isConsonant = function () {
	return ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "Y", "Z"].indexOf(this.toUpperCase()) !== -1;
};

String.prototype.isAccent = function () {
	return ["\u00C5", "\u00C4", "\u00D6"].indexOf(this.toUpperCase()) !== -1;
};

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.containsAccent = function () {
	for (var i=0; i <= this.length; i++) {
		if (i == this.length) {
			return false;
		} else if (this[i][0].isAccent()) {
			return true;
		}
	}
};

Array.prototype.containsVowel = function () {
	for (var i = 0; i <= this.length; i++) {
		if (i == this.length) {
			return false;
		} else if (this[i][0].isVowel()) {
			return true;
		}
	}
};

Array.prototype.containsConsonant = function () {
	for (var i = 0; i <= this.length; i++) {
		if (i == this.length) {
			return false;
		} else if (this[i][0].isConsonant()) {
			return true;
		}
	}
};

var vowelBeginnings = [
	"A",
	"E",
	"I",
	"O",
	"U"
];

var vowelAccentBeginnings = [
	"\u00C5",
	"\u00C4",
	"\u00D6"
];

var consonantBeginnings = [
	"B",
	"C",
	"D",
	"F",
	"G",
	"H",
	"J",
	"K",
	"L",
	"M",
	"N",
	"P",
	"R",
	"S",
	"T",
	"V",
	"W",
	"Y",
	"Z"
];

var possibilities = {
	"A": ["B", "D", "G", "R", "I", "K", "L", "M", "N", "P", "S", "T", "U", "V", "C", "H", "F", "J", "X", "E"],
	"B": ["S", "O", "A", "E", "I", "B", "J", "L", "R", "U", "Y", "\u00C5", "\u00C4", "\u00D6"],
	"C": ["K", "A", "E", "I", "H", "L", "Y"],
	"D": ["M", "A", "R", "N", "D", "E", "I", "L", "H", "S", "Y", "J", "O", "U", "V", "\u00C5", "\u00C4", "G", "T", "B", "P"],
	"E": ["T", "D", "B", "M", "L", "K", "S", "A", "H", "N", "R", "V", "F", "C", "G", "I", "P", "X", "J", "U"],
	"F": ["O", "A", "R", "T", "F", "E", "J", "I", "L", "N", "U", "Y", "\u00C5", "\u00C4", "\u00D6"],
	"G": ["A", "E", "N", "G", "I", "S", "U", "V", "O", "\u00D6", "B", "J", "L", "R", "Y", "\u00C5", "\u00C4", "H"],
	"H": ["O", "A", "\u00D6", "U", "E", "J", "Y", "\u00C5", "\u00C4", "I"],
	"I": ["N", "S", "T", "F", "L", "U", "B", "G", "M", "X", "P", "D", "R", "K", "O", "V", "A", "C", "E", "\u00C4"],
	"J": ["A", "U", "\u00C4", "\u00D6", "O", "K", "E", "T", "I", "Y", "S", "B", "V", "L", "M"],
	"K": ["S", "U", "A", "\u00C4", "E", "R", "V", "\u00C5", "J", "T", "B", "O", "L", "I", "\u00D6", "K", "M", "N", "Y", "P", "H"],
	"L": ["A", "E", "K", "I", "L", "S", "V", "\u00C4", "U", "O", "M", "D", "\u00C5", "Y", "F", "G", "\u00D6", "B", "H", "T", "R", "J", "N", "P"],
	"M": ["E", "\u00C5", "A", "O", "I", "M", "S", "\u00D6", "U", "P", "B", "N", "T", "L", "D", "F", "R", "J", "Y", "\u00C4", "V", "H"],
	"N": ["A", "D", "E", "I", "J", "N", "O", "R", "S", "T", "G", "H", "U", "K", "\u00C4", "V", "L", "\u00D6", "\u00C5", "F", "Y", "C", "B"],
	"O": ["R", "D", "N", "L", "M", "C", "S", "A", "H", "\u00C5", "F", "K", "P", "T", "B", "G", "J", "V", "X", "\u00C4"],
	"P": ["E", "U", "V", "P", "S", "I", "A", "O", "L", "T", "J", "R", "Y", "\u00C5", "\u00C4", "\u00D6"],
	"R": ["Y", "U", "E", "D", "I", "H", "R", "A", "V", "N", "O", "G", "T", "\u00C4", "\u00D6", "S", "K", "B", "J", "M", "F", "L", "P", "\u00C5"],
	"S": ["O", "D", "A", "E", "T", "V", "L", "S", "K", "P", "I", "B", "J", "N", "F", "Y", "H", "G", "U", "\u00D6", "\u00C5", "C", "M", "\u00C4"],
	"T": ["E", "I", "O", "R", "N", "T", "Y", "A", "B", "U", "D", "V", "S", "L", "J", "\u00D6", "F", "\u00C5", "G", "H", "\u00C4", "M"],
	"U": ["R", "T", "N", "D", "K", "L", "M", "S", "G", "F", "V", "A", "B", "P"],
	"V": ["I", "\u00C4", "A", "E", "U", "O", "\u00C5", "Y", "B", "T", "S", "N", "L", "R"],
	"W": ["I"],
	"X": ["K", "P", "I", "E", "T", "S", "B", "\u00C5"],
	"Y": ["L", "N", "G", "H", "P", "R", "C", "T", "K", "B", "S", "D", "F", "M"],
	"Z": ["I"],
	"\u00C5": ["L", "D", "S", "G", "V", "T", "R", "B", "N", "K", "\u00C5"],
	"\u00C4": ["N", "T", "R", "D", "S", "L", "M", "C", "J", "G", "P", "K", "F", "V", "X"],
	"\u00D6": ["V", "R", "J", "L", "M", "N", "D", "K", "G", "F", "S", "P"]
};

var endings = {
	"A": ["BB", "BO", "CK", "DD", "DE", "DO", "EL", "GA", "JA", "JS", "JT", "KA", "KE", "LA", "LD", "LG", "LJ", "LK", "LL", "LM", "LT", "MA", "NA", "ND", "NG", "NJ", "NK", "NS", "NT", "N\u00D6", "PA", "PS", "RA", "RD", "RE", "RI", "RK", "RM", "RP", "RS", "RT", "RV", "R\u00D6", "SA", "SS", "ST", "TA", "TI", "TS", "TT", "VE"],
	"B": ["AL", "AN", "AR", "BA", "BE", "BI", "BO", "EH", "ER", "ET", "IG", "IL", "LA", "LE", "OL", "RO", "\u00C4K", "\u00C4R"],
	"C": ["IA", "IS", "KA", "KE"],
	"D": ["AD", "AL", "AM", "AN", "BY", "DA", "DE", "EL", "EN", "ER", "ET", "EX", "E\u00C5", "IG", "IS", "IT", "IV", "LA", "NA", "OR", "RA", "UM", "US", "YR"],
	"E": ["AL", "AT", "BO", "BY", "DA", "DD", "FF", "IG", "IM", "IT", "JA", "JE", "J\u00D6", "KA", "KO", "KT", "LA", "LE", "LL", "LV", "MO", "MU", "NA", "NN", "NS", "NT", "RA", "RG", "RN", "RS", "RT", "R\u00D6", "SA", "ST", "TA", "TE", "TT", "US", "VA"],
	"F": ["AN", "AS", "ER", "FA", "FE", "IA", "IK", "IL", "IN", "LA", "R\u00D6", "TA", "\u00C4R"],
	"G": ["AM", "AN", "AR", "BY", "EL", "EN", "ER", "GA", "GE", "GY", "IG", "IS", "JO", "LA", "LO", "NA", "NE", "ON", "OR", "RA", "ST", "UM", "UR", "YM", "\u00D6R"],
	"H": ["AN", "EM", "OB", "OO"],
	"I": ["AL", "AN", "AS", "AT", "BY", "DD", "DE", "EN", "GT", "KA", "KT", "LA", "LD", "LL", "LS", "LT", "MP", "MT", "NA", "ND", "NE", "NG", "NK", "NN", "OD", "ON", "OR", "PE", "PP", "PS", "RA", "RO", "RP", "SA", "SK", "SS", "ST", "TA", "TO", "TT", "UM", "US", "VA", "VT", "V\u00C5", "XA", "XT", "\u00C4R"],
	"J": ["AN", "BY", "EN", "IG", "KA", "MA", "OM", "SA", "TA", "UK", "UR", "UV", "\u00C4S", "\u00D6D", "\u00D6N"],
	"K": ["AD", "AJ", "AL", "AN", "AT", "BY", "EA", "EL", "EN", "ER", "ET", "IG", "IM", "IN", "IR", "IS", "KA", "LA", "OB", "OG", "OJ", "RA", "SA", "TA", "US", "UT", "\u00C4R", "\u00C5S", "\u00D6R"],
	"L": ["AD", "AK", "AN", "AR", "AS", "BO", "BU", "BY", "DA", "EJ", "EN", "ER", "ES", "EV", "EX", "GA", "G\u00C5", "IA", "IG", "IK", "IN", "IR", "IS", "IT", "JA", "KA", "LA", "LD", "LE", "LO", "LT", "LY", "L\u00D6", "MA", "MI", "OM", "ON", "OP", "OU", "SA", "SE", "SK", "S\u00D6", "TE", "T\u00D6", "UM", "UR", "US", "VA", "VE", "YM", "YN", "YT", "\u00C5N", "\u00D6T", "\u00D6V"],
	"M": ["AK", "AL", "AN", "AR", "AT", "EN", "ER", "ET", "IG", "IL", "IN", "IX", "LA", "LE", "MA", "M\u00D6", "OA", "ON", "PA", "PT", "RA", "SK", "S\u00D6", "UT", "YS", "\u00C5N", "\u00C5S", "\u00D6R"],
	"N": ["AL", "AN", "AS", "AT", "BY", "DA", "DE", "DO", "DY", "EN", "ER", "ES", "EZ", "FO", "GA", "GE", "GO", "IG", "IN", "JA", "JE", "KA", "KT", "NA", "NE", "NI", "NO", "ON", "OT", "SA", "ST", "TA", "UM", "\u00C4S", "\u00C5R", "\u00C5S", "\u00D6A", "\u00D6R", "\u00D6S"],
	"O": ["BI", "BO", "BY", "CK", "DA", "DD", "DI", "GA", "JA", "JS", "KK", "LA", "LD", "LF", "LG", "LK", "LM", "MP", "NA", "NG", "NI", "NS", "PA", "PP", "PS", "RA", "RB", "RD", "RE", "RF", "RG", "RM", "RN", "RP", "RS", "RT", "R\u00C5", "R\u00D6", "SA", "SS", "ST", "TO", "TS", "VA", "\u00C5S"],
	"P": ["AD", "AN", "AR", "AS", "AX", "EN", "ER", "IG", "IN", "OK", "PA", "PE", "SA", "SO"],
	"R": ["AF", "AK", "AM", "AN", "AR", "BO", "BY", "DE", "EA", "ED", "EJ", "EN", "ET", "IB", "ID", "IG", "IK", "IL", "IN", "IP", "IS", "IT", "JA", "JE", "KA", "KE", "KT", "LA", "LD", "LI", "MA", "ME", "MO", "NA", "N\u00D6", "OS", "PO", "RA", "RE", "RY", "R\u00C5", "S\u00C5", "TA", "TI", "UD", "UM", "UN", "UP", "US", "YD", "YP", "\u00C4D", "\u00C4N", "\u00C4R", "\u00C4S", "\u00D6D", "\u00D6M", "\u00D6N", "\u00D6Y"],
	"S": ["AL", "AM", "AR", "BO", "BY", "CH", "EL", "EN", "ER", "ES", "ET", "IG", "IK", "IN", "J\u00D6", "KA", "K\u00D6", "LA", "LE", "N\u00D6", "OL", "OR", "PA", "SA", "SE", "SI", "TA", "T\u00C5", "T\u00D6", "UM", "\u00C5S", "\u00D6N"],
	"T": ["AD", "AG", "AL", "AN", "AR", "AV", "BO", "BY", "ED", "EK", "EL", "EN", "ER", "ES", "ET", "IA", "ID", "IG", "IK", "IL", "IM", "IN", "IS", "IV", "JA", "NA", "OL", "OR", "RA", "R\u00C5", "TA", "TE", "TO", "TY", "UA", "UN", "UR", "VA", "YD", "YG", "\u00C5R", "\u00D6R"],
	"U": ["BB", "DA", "DD", "FF", "FT", "GA", "GG", "GN", "GO", "KT", "LA", "LL", "LS", "LT", "ND", "NE", "NG", "NS", "RA", "RM", "RR", "RS", "SY", "S\u00C5", "TA", "TT"],
	"V": ["AL", "AN", "AR", "AS", "ED", "EL", "EN", "ER", "ET", "IG", "IK", "IS", "IT", "OR", "UR", "YR", "\u00C4M", "\u00C4V", "\u00C5G", "\u00C5S"],
	"X": ["BO", "EL", "IG", "\u00C5N"],
	"Y": ["BY", "CK", "DA", "DD", "FT", "GG", "GN", "LL", "MO", "NE", "RA", "SA", "TA"],
	"\u00C5": ["DA", "LA", "NN", "VA", "\u00C5N"],
	"\u00C4": ["CK", "DA", "DD", "GG", "KT", "LK", "LL", "NG", "NN", "RA", "RM", "RT", "TA", "TT", "XT"],
	"\u00D6": ["DA", "GE", "JA", "JE", "JS", "KA", "K\u00D6", "ME", "NA", "NN", "N\u00D6", "RA", "RN", "RT", "SA", "VA", "VD"]
};

/*
	\u00C5 - Å
	\u00C4 - Ä
	\u00D6 - Ö
*/

var endLength = 9;

function validNextLetter(letter, type) {
	var storage = "";
	if (type === "v") {
		if (letter === "Y") {
			return possibilities.Y.randomElement();
		} else {
			if ((Math.random() <= 0.8) || !(possibilities[letter].containsAccent())) { //no accent
				while ((!storage.isVowel()) || (storage === "") || (storage.isAccent())) {
					storage = possibilities[letter].randomElement();
					if (storage.isVowel() && !storage.isAccent()) {
						return storage;
					}
				}
			} else { //yes accent
				while ((!storage.isAccent()) || (storage === "")) {
					storage = possibilities[letter].randomElement();
					if (storage.isAccent()) {
						return storage;
					}
				}
			}
		}
	} else if (type === "c") {
		if (letter === "W" || letter === "Z") {
			return "I";
		} else {
			while ((!storage.isConsonant()) || (storage === "")) {
				storage = possibilities[letter].randomElement();
				if (storage.isConsonant()) {
					return storage;
				}
			}
		}
	} else if (type === "va") {
		while ((!storage.isVowel()) || (storage === "")) {
			storage = possibilities[letter].randomElement();
			if (storage.isVowel() && !storage.isAccent()) {
				return storage;
			}
		}
	} else {
		return possibilities[letter].randomElement();
	}
}

function validEnding(letter, type) {
	var storage = "";
	if (type === "v") {
		if ((Math.random() <= 0.8) || !(endings[letter].containsAccent())) { //no accent
			while ((!storage.lastLetter(1).isVowel()) || (storage === "") || (storage.lastLetter(1).isAccent())) {
				storage = endings[letter].randomElement();
				if (storage.lastLetter(1).isVowel() && !storage.lastLetter(1).isAccent()) {
					return storage;
				}
			}
		} else { //yes accent
			while ((!storage.lastLetter(1).isAccent()) || (storage === "")) {
				storage = endings[letter].randomElement();
				if (storage.lastLetter(1).isAccent()) {
					return storage;
				}
			}
		}
	} else if (type === "c") {
		while ((!storage.lastLetter(1).isConsonant()) || (storage === "")) {
			storage = endings[letter].randomElement();
			if (storage.lastLetter(1).isConsonant()) {
				return storage;
			}
		}
	} else if (type === "va") {
		while ((!storage.lastLetter(1).isVowel()) || (storage === "")) {
			storage = endings[letter].randomElement();
			if (storage.lastLetter(1).isVowel() && !storage.lastLetter(1).isAccent()) {
				return storage;
			}
		}
	} else {
		return endings[letter].randomElement();
	}
}
function generateNextLetter(string) {
	if (string === "BEGIN") {
		return vowelBeginnings.concat(vowelAccentBeginnings.concat(consonantBeginnings)).randomElement();
	} else {
		if (string.lastLetter().isVowel()) {
			if (string.lastLetter().isVowel(1)) {
				return string + validNextLetter(string.lastLetter(), "c");
			} else {
				if (Math.random() <= 0.2) {
					if (string.lastLetter().isAccent()) {
						return string + validNextLetter(string.lastLetter(), "va");
					} else {
						return string + validNextLetter(string.lastLetter(), "v");
					}
				} else {
					return string + validNextLetter(string.lastLetter(), "c");
				}
			}
		} else {
			if (string.lastLetter().isConsonant(1)) {
				if (string.lastLetter().isConsonant(2)) {
					if (string.lastLetter().isConsonant(3)) {
						return string + validNextLetter(string.lastLetter(), "v");
					}
					if (Math.random() <= 0.25) {
						return string + validNextLetter(string.lastLetter(), "c");
					} else {
						return string + validNextLetter(string.lastLetter(), "v");
					}
				}
				if (Math.random() <= 0.5) {
					return string + validNextLetter(string.lastLetter(), "c");
				} else {
					return string + validNextLetter(string.lastLetter(), "v");
				}
			} else {
				if (Math.random() <= 0.5) {
					return string + validNextLetter(string.lastLetter(), "c");
				} else {
					return string + validNextLetter(string.lastLetter(), "v");
				}
			}
		}
	}
}

function ender(string) {
	if (string.lastLetter().isVowel()) {
		if (string.lastLetter().isVowel(1)) {
			return string + validEnding(string.lastLetter(), "c");
		} else {
			if (Math.random() <= 0.2) {
				if (string.lastLetter().isAccent()) {
					return string + validEnding(string.lastLetter(), "va");
				} else {
					return string + validEnding(string.lastLetter(), "v");
				}
			} else {
				return string + validEnding(string.lastLetter(), "c");
			}
		}
	} else {
		if (string.lastLetter().isConsonant(1)) {
			if (string.lastLetter().isConsonant(2)) {
				if (string.lastLetter().isConsonant(3)) {
					return string + validEnding(string.lastLetter(), "v");
				}
				if (Math.random() <= 0.2) {
					return string + validEnding(string.lastLetter(), "c");
				} else {
					return string + validEnding(string.lastLetter(), "v");
				}
			}
			if (Math.random() <= 0.4) {
				return string + validEnding(string.lastLetter(), "c");
			} else {
				return string + validEnding(string.lastLetter(), "v");
			}
		} else {
			if (Math.random() <= 0.6) {
				return string + validEnding(string.lastLetter(), "c");
			} else {
				return string + validEnding(string.lastLetter(), "v");
			}
		}
	}
}

function generate() {
	var end = false;
	var finalString = "BEGIN";
	
	while (!end) {
		finalString = generateNextLetter(finalString);
		if (Math.random() <= ((1/endLength)*(finalString.length-1))) {
			end = true;
		}
		if (end) {
			finalString = ender(finalString);
		}
	}
	
	/*
		at 2 letters, 10% chance of ending
		at 3 letters, 20% chance of ending
		at 4 letters, 40% chance of ending
		at 5 letters, 60% chance of ending
		at 6 letters, 80% chance of ending
		at 7 letters, 90% chance of ending
		at 8 letters, 100% chance of ending
		
		TODO while loops with consonant-only followings
		TODO generate an end
	*/
	
	document.getElementById("text").innerHTML = finalString;
}

generate();